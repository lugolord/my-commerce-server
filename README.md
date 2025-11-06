# 🛒 Mercado Pago Checkout Backend

  

Este es un backend sencillo en **Node.js** que permite crear sesiones de pago utilizando la API de [Mercado Pago](https://www.mercadopago.com.ar/developers/es).

Ideal como backend para aplicaciones e-commerce o demos que necesiten integrarse con pagos online.

  

## 🚀 Tecnologías y Dependencias

  

- [**Express**](https://expressjs.com/) — Framework minimalista para crear APIs en Node.js.

- [**CORS**](https://expressjs.com/en/resources/middleware/cors.html) — Middleware para habilitar peticiones cross-origin.

- [**Mercado Pago**](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/overview) — Plataforma de pagos moderna para internet.

  

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

  

### `POST /create-preference`

Crea una nueva preferencia de pago en mercado pago.

### `POST /check-id`

Verifica que el id del pago sea real utilizando la api de mercado pago. Ejemplo de respuesta:

```javascript
{ ok: true } /// en caso de que el id sea real

{ ok: false, error: err.error } /// en caso de que el id sea falso
```

## 📝 Notas

- No usar cuentas de mercado pago reales para probar la app. En su lugar usa los siguientes datos de prueba al momento de la compra:

  - Numero de tarjeta: 5031 7557 3453 0604
  - Nombre: 
    - APRO - si quieres que la operacion sea exitosa
    - OTHE - si quieres que la operacion falle
  - Fecha de vencimiento de la tarjeta: 11/30
  - Clave de la tarjeta: 123
  - DNI: 12345678
  - Mail: TESTUSER151495173@testuser.com

- Este backend está pensado para **proyectos personales**. No para **produccion**.
---
## 🖥️ Desarrollado por
**Luis Gonzalez**

[Portfolio](https://www.luisgonz.tech/) • [LinkedIn](https://linkedin.com/in/luisgonzr) • [GitHub](https://github.com/lugolord)