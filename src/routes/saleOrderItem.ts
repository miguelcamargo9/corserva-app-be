import { Router } from 'express';
import {
  createSaleOrderItem,
  getSaleOrderItems,
  getSaleOrderItemById,
  updateSaleOrderItemById,
  deleteSaleOrderItemById,
} from '../controllers/saleOrderItemController';

const router = Router();

router.post('/', createSaleOrderItem);
router.get('/', getSaleOrderItems);
router.get('/:id', getSaleOrderItemById);
router.put('/:id', updateSaleOrderItemById);
router.delete('/:id', deleteSaleOrderItemById);

export default router;
