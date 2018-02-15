module.exports = app => {
  const mongoose = app.mongoose

  const ClientSchema = new mongoose.Schema({
    cid: { type: String, unique: true },
    hid: { type: String },
    name: { type: String },
    keep_at: { type: Number },
    reg_at: { type: Number },
    login_at: { type: Number },
    create_at: { type: Number }
  })

  return mongoose.model('Client', ClientSchema, 'client')
}
