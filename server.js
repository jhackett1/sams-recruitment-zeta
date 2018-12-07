const dotenv = require('dotenv').config()
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiRouter = require('./api/router')

app.prepare()
  .then(() => {
    const server = express()

    // Attach API routes
    server.use('/api', apiRouter)

    // Branch finder page
    server.get('/:role/which-branch', (req, res) => {
      return app.render(req, res, '/which-branch', {role: req.params.role})
    })
    server.get('/:role/which-branch', (req, res) => {
      return app.render(req, res, '/which-branch', {role: req.params.role})
    })

    // All other pages
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })