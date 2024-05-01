// 1. Import Exprerss
import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import apiDocs from './swagger.json' assert {type: 'json'};

// 2. Create Server
const server = express();

// CORS policy configuration

var corsOptions = {
  origin: "http://localhost:5500"
}
server.use(cors(corsOptions));

// server.use((req, res, next)=>{
//   res.header('Access-Control-Allow-Origin','http://localhost:5500');
//   res.header('Access-Control-Allow-Headers','*');
//   res.header('Access-Control-Allow-Methods','*');
//   // return ok for preflight request.
//   if(req.method=="OPTIONS"){
//     return res.sendStatus(200);
//   }
//   next();
// })

server.use(express.json());
// Bearer <token>
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api-docs", 
swagger.serve, 
swagger.setup(apiDocs))

server.use(
  '/api/products',
  jwtAuth,
  productRouter
);
server.use("/api/cartItems", jwtAuth, cartRouter);
server.use('/api/users', userRouter);

// 3. Default request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

// 4. Middleware to handle 404 requests.
server.use((req, res)=>{
  res.status(404).send("API not found. Please check our documentation for more information at localhost:3200/api-docs")
});


// 5. Specify port.
server.listen(3200);

console.log('Server is running at 3200');
