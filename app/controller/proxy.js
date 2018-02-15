const Controller = require('egg').Controller

class proxyController extends Controller {
  async list() {
    const { ctx, service } = this
  }

  async scan() {
    const { ctx, service } = this
  }
}

module.exports = proxyController
