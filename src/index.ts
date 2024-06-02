import { sequelize } from './database';
import app from './app';

const port = 3001;

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
