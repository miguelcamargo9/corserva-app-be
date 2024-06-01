import { Request, Response } from 'express';
import SaleOrderItem from '../models/saleOrderItem';
import Joi from 'joi';

const saleOrderItemSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().required(),
});

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

export const createSaleOrderItem = async (req: Request, res: Response) => {
  try {
    const { error } = saleOrderItemSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }
    const saleOrderItem = await SaleOrderItem.create(req.body);
    res.status(201).json(saleOrderItem);
  } catch (err) {
    res.status(500).json({ error: getErrorMessage(err) });
  }
};

export const getSaleOrderItems = async (req: Request, res: Response) => {
  try {
    const saleOrderItems = await SaleOrderItem.findAll();
    res.status(200).json(saleOrderItems);
  } catch (err) {
    res.status(500).json({ error: getErrorMessage(err) });
  }
};

export const getSaleOrderItemById = async (req: Request, res: Response) => {
  try {
    const saleOrderItem = await SaleOrderItem.findByPk(req.params.id);
    if (!saleOrderItem) {
      return res.status(404).json({ error: 'Sale Order Item no encontrado' });
    }
    res.status(200).json(saleOrderItem);
  } catch (err) {
    res.status(500).json({ error: getErrorMessage(err) });
  }
};

export const updateSaleOrderItemById = async (req: Request, res: Response) => {
  try {
    const { error } = saleOrderItemSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }
    const [updated] = await SaleOrderItem.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedSaleOrderItem = await SaleOrderItem.findByPk(req.params.id);
      res.status(200).json(updatedSaleOrderItem);
    } else {
      res.status(404).json({ error: 'Sale Order Item no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: getErrorMessage(err) });
  }
};

export const deleteSaleOrderItemById = async (req: Request, res: Response) => {
  try {
    const deleted = await SaleOrderItem.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Sale Order Item no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: getErrorMessage(err) });
  }
};
