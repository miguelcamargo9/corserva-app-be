import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import saleOrderItemRoutes from './routes/saleOrderItem';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/sale-order-items', saleOrderItemRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Corserva!');
});

export default app;