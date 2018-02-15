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
    console.log(this.ctx.model.Client)
    await this.ctx.model.Client.create(data)
  }
}

module.exports = ClientService
