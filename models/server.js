import express from 'express'

export class Server {
  constructor () {
    this.port = process.env.PORT
    this.app = express()
    this.routes()
  }

  routes () {
    this.app.get('/', (req, res) => {
      res.send('hello world')
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`)
    })
  }
}
