module.exports = app => {
  const mongoose = app.mongoose

  const ProxySchema = new mongoose.Schema({
    url: { type: String, unique: true },
    name: { type: String },
    from: { type: String },
    disabled: { type: Boolean },
    scanList: { type: Array },
    scan_at: { type: Number },
    update_at: { type: Number },
    create_at: { type: Number }
  })
  ProxySchema.index({ url: 1 })

  return mongoose.model('Proxy', ProxySchema, 'proxy')
}
