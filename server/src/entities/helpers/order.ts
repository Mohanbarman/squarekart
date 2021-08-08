import { getManager } from "typeorm";

import { OrderEntity } from "../OrderEntity";

export const orderUtils = {
  add: (order: Partial<OrderEntity>) => {
    const manager = getManager();

    const _order = new OrderEntity();
    _order.fullName = order.fullName;
    _order.shippingAddress = order.shippingAddress;
    _order.city = order.city;
    _order.state = order.state;
    _order.mobile = order.mobile;
    _order.currency = order.currency;
    _order.pricePerItem = order.pricePerItem;
    _order.productId = order.productId;
    _order.userId = order.userId;
    _order.qty = order.qty;

    return manager.save(_order);
  },

  getById: (id: number) => {
    const manager = getManager();
    return manager.findOne(OrderEntity, {
      where: { id },
      relations: ["product"],
    });
  },

  getAllByUserId: (id: number) => {
    const manager = getManager();
    return manager.find(OrderEntity, {
      where: { userId: id },
      relations: ["product"],
    });
  },
};
