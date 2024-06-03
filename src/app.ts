import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import saleOrderItemRoutes from './routes/saleOrderItem';

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/sale-order-items', saleOrderItemRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Corserva!');
});

export default app;
