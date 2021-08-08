import { getManager } from "typeorm";
import { ProductEntity } from "../ProductEntity";

export const productUtils = {
  add: (product: Partial<ProductEntity>) => {
    const manager = getManager();

    const _product = new ProductEntity();
    _product.description = product.description;
    _product.photoUrl = product.photoUrl;
    _product.title = product.title;
    _product.price = product.price;
    _product.currency = product.currency;

    return manager.save(_product);
  },

  getAll: () => {
    const manager = getManager();
    return manager.find(ProductEntity);
  },

  getById: (id: number) => {
    const manager = getManager();
    return manager.findOne(ProductEntity, { where: { id } });
  },
};
