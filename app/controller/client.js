const Controller = require('egg').Controller

class clientController extends Controller {
  async login() {
    const { ctx, service } = this
    let data = ctx.request.body
    console.log(data)

    await service.client.login(data)
    ctx.body = data
  }

  async keepalive() {
    const { ctx, service } = this
  }

  async report() {
    const { ctx, service } = this
  }
}

module.exports = clientController
