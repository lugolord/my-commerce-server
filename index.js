import { MercadoPagoConfig, Preference } from 'mercadopago'
import express from 'express'
import cors from 'cors'

const app = express()
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN })

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
        success: 'https://my-commerce-front-psi.vercel.app/success'
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

app.post('/prueba', (req, res) => {
  console.log('entro a este endpoint')

  res.json({ ok: 'todo ok' })
})


app.listen(4242, () => console.log('Running on port 4242'))
