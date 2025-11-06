import { MercadoPagoConfig, Preference, Payment } from 'mercadopago'
import express from 'express'
import cors from 'cors'

const app = express()
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN })
const payment = new Payment(client)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const transformReqItems = (items) => {
  const newItems = items.map(item => ({
    id: item.id,
    title: item.title,
    picture_url: item.thumbnail,
    quantity: item.quantity,
    unit_price: item.price
  }))

  return newItems
}

app.post('/create-preference', (req, res) => {
  const preference = new Preference(client)
  const items = transformReqItems(req.body.items)

  preference.create({
    body: {
      items: items,
      back_urls: {
        success: 'https://my-commerce-front-psi.vercel.app/success',
        failure: 'https://my-commerce-front-psi.vercel.app/fail'
      }
    }
  })
  .then(data => {
    res.status(200).json({
      preference_id: data.id,
      preference_url: data.init_point
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ error: 'error creando la preferencia' })
  })
})

app.post('/check-id', (req, res) => {
  const paymentId = req.body.payment_id

  payment.get({ id: paymentId })
    .then(() => res.json({ ok: true }))
    .catch((err) => res.json({ ok: false, error: err.error}))
})


app.listen(4242, () => console.log('Running on port 4242'))
