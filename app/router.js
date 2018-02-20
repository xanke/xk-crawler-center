/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  router.get('/', controller.home.index)
  router.post('/client/login', controller.client.login)
  router.post('/client/keepalive', controller.client.keepalive)
  router.get('/client/report', controller.home.index)

  router.get('/proxy/list', controller.proxy.list)
  router.get('/proxy/scan', controller.proxy.scan)

  router.post('/client', controller.client.create)
  router.put('/client', controller.client.edit)
  router.delete('/client', controller.client.delete)
}
