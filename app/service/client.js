const Service = require('egg').Service

class ClientService extends Service {
  async login(data) {
    // await this.ctx.model.Client.update(
    //   { _id },
    //   { $set: data },
    //   {
    //     upsert: true
    //   }
    // ).exec()
    await this.ctx.model.Client.create(data)
  }

  async create(data) {
    await this.ctx.model.Client.create(data)
  }

  async edit(data) {
    await this.ctx.model.Client.update(data)
  }

  async delete(data) {
    await this.ctx.model.Client.delete(data)
  }

}

module.exports = ClientService
