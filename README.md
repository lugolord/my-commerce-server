# 🛒 Stripe Payment Backend

  

Este es un backend sencillo en **Node.js** que permite crear sesiones de pago utilizando la API de [Stripe](https://stripe.com).

Ideal como backend para aplicaciones e-commerce o demos que necesiten integrarse con pagos online.

  

## 🚀 Tecnologías y Dependencias

  

- [**Express**](https://expressjs.com/) — Framework minimalista para crear APIs en Node.js.

- [**CORS**](https://expressjs.com/en/resources/middleware/cors.html) — Middleware para habilitar peticiones cross-origin.

- [**Stripe**](https://stripe.com/docs/api) — Plataforma de pagos moderna para internet.

  

## 📦 Instalación

  

1. Clona este repositorio:

```bash

git clone https://github.com/lugolord/my-commerce-server.git

cd my-commerce-server

```

  

2. Instala las dependencias:

```bash

npm install

```
4. Inicia el servidor:

```bash

node index.js

```

  

## 🔌 Endpoints disponibles

  

### `POST /create-checkout-session`

Crea una nueva sesión de pago en Stripe.

  

#### Body esperado:

```json

{

"items": [

{ "id": "product_1", "quantity": 1 },

{ "id": "product_2", "quantity": 2 }

]

}

```

  

#### Respuesta:

```json

{

"url": "https://checkout.stripe.com/pay/cs_test_..."

}

```

  

## 📝 Notas

- Debes configurar tus productos y precios en [Stripe Dashboard](https://dashboard.stripe.com/test/products) antes de crear sesiones.

- Este backend está pensado para fines **educativos** o para **proyectos personales**. No para **produccion**.
---
## 🖥️ Desarrollado por
**Luis Gonzalez**

[Portfolio](https://www.luisgonz.tech/) • [LinkedIn](https://linkedin.com/in/luisgonzr) • [GitHub](https://github.com/lugolord)