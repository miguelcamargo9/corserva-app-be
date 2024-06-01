import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database';
import saleOrderItemRoutes from './routes/saleOrderItem';

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/sale-order-items', saleOrderItemRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Corserva!');
});

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synchronized.');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});