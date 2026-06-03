import { createServer } from 'node:http'
import { Readable } from 'node:stream'
import { join, extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import handler from './dist/server/server.js'

const CLIENT_DIR = join(process.cwd(), 'dist/client')

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
}

const server = createServer(async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const host = req.headers.host || 'localhost'
    const url = new URL(req.url, `${protocol}://${host}`)
    
    // Try serving static files first
    let filePath = join(CLIENT_DIR, url.pathname === '/' ? 'index.html' : url.pathname)
    try {
      const s = await stat(filePath)
      if (s.isFile()) {
        const content = await readFile(filePath)
        const contentType = MIME_TYPES[extname(filePath)] || 'application/octet-stream'
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content)
        return
      }
    } catch (e) {
      // Not a static file, continue to TanStack Start handler
    }

    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? Readable.toWeb(req) : null,
      duplex: 'half'
    })

    const response = await handler.fetch(request)

    res.statusCode = response.status
    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })

    if (response.body) {
      const reader = response.body.getReader()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        res.write(value)
      }
    }
    res.end()
  } catch (error) {
    console.error('Error handling request:', error)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`)
})
