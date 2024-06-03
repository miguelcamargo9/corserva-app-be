import { sequelize } from './database';
import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3001;

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized.');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Error connecting to the database:', error.message);
  });
