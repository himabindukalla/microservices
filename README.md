<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Nest.js Microservices Example

This project demonstrates how to build microservices using Nest.js with communication between two microservices (`product` and `order`). The microservices use MongoDB as the database.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd nest-microservices-example
   ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Test the CRUD operations

## product

```bash
# 1.Create Product
$ curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Laptop", "description:"Laptop and its accessories", "seller":"xyz brand", "category":"Electronics", "price": 1000, "count": 5}'
# expected output
$ {"_id":"product_id_here","name":"Laptop","description:"Laptop and its accessories", "seller":"xyz brand", "category":"Electronics","price":1000,"count":5}

# 2.Get All products
$ curl http://localhost:3000/products
# expected output
$ {"_id":"product_id_here","name":"Laptop","description:"Laptop and its accessories", "seller":"xyz brand", "category":"Electronics","price":1000,"count":5}

# 3.Get a specific Product
$ curl http://localhost:3000/products/product_id_here

# expected output
$ {"_id":"product_id_here","name":"Laptop","description:"Laptop and its accessories", "seller":"xyz brand", "category":"Electronics","price":1000,"count":5}

# 4.update product
$ curl -X PUT http://localhost:3000/products/product_id_here -H "Content-Type: application/json" -d '{"name": "Updated Laptop", "price": 1200, "count": 8}'

#expected output
$ {"_id":"product_id_here","name":"Updated Laptop","description:"Laptop and its accessories", "seller":"xyz brand", "category":"Electronics","price":1200,"count":8}

# 5.Delete Product
$ curl -X DELETE http://localhost:3000/products/product_id_here

```

## order

```bash
# 1.Create order
$ curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{"products": ["product_id_here"],   "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}'

# expected output
$ {"_id":"order_id_here","products":["product_id_here"], "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}


# 2.Get All Orders
$ curl http://localhost:3000/orders
# expected output
$ {"_id":"order_id_here","products":["product_id_here"], "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}

# 3.Get a specific order
$ curl http://localhost:3000/products/order_id_here

# expected output
$ {"_id":"order_id_here","products":["product_id_here"], "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}

# 4.update order
$ curl -X PUT http://localhost:3000/orders/order_id_here -H "Content-Type: application/json" -d '{"products": ["updated_product_id_here"], "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}'


#expected output
$ {"_id":"order_id_here","products":["product_id_here"], "isConfirmed": true, "transactionMode": "COD", "amountPaid": 3000}

# 5.Delete order
$ curl -X DELETE http://localhost:3000/products/order_id_here

```
