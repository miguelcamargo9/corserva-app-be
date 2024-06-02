import request from 'supertest';
import { sequelize } from '../database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Sale Order Item API', () => {
  it('should create a new sale order item', async () => {
    const response = await request(app)
      .post('/sale-order-items')
      .send({
        name: 'Test Item',
        quantity: 10,
        price: 100.0,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Item');
  });

  it('should get all sale order items', async () => {
    const response = await request(app).get('/sale-order-items');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a sale order item by ID', async () => {
    const createResponse = await request(app)
      .post('/sale-order-items')
      .send({
        name: 'Another Item',
        quantity: 5,
        price: 50.0,
      });

    const id = createResponse.body.id;
    const response = await request(app).get(`/sale-order-items/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', id);
  });

  it('should update a sale order item by ID', async () => {
    const createResponse = await request(app)
      .post('/sale-order-items')
      .send({
        name: 'Item to Update',
        quantity: 1,
        price: 10.0,
      });

    const id = createResponse.body.id;
    const response = await request(app)
      .put(`/sale-order-items/${id}`)
      .send({
        name: 'Updated Item',
        quantity: 2,
        price: 20.0,
      });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Item');
  });

  it('should delete a sale order item by ID', async () => {
    const createResponse = await request(app)
      .post('/sale-order-items')
      .send({
        name: 'Item to Delete',
        quantity: 1,
        price: 10.0,
      });

    const id = createResponse.body.id;
    const response = await request(app).delete(`/sale-order-items/${id}`);
    expect(response.status).toBe(204);
  });
});

afterAll(async () => {
  await sequelize.close();
});
