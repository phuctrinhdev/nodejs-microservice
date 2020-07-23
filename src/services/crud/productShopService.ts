import { CrudService, ICrudOption } from '../crudService.pg'
import { ProductShop, Shop, Product } from '@/models/tables'

import {
    sequelize
} from '@/models'
import axios from 'axios';
import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
import { config } from '@/config'
export class ProductShopService extends CrudService<typeof ProductShop> {
    constructor() {
        super(ProductShop)
    }
    async changeAllNotInUse(body: any) {
        const { item_id, state, type } = body;
        const transaction = await sequelize.transaction();
        try {
            if (type === 'shop') {
                const shop = this.exec(Shop.findOne({
                    where: {
                        id: item_id
                    }
                }));
                if (shop) {
                    await this.exec(Shop.update(
                        { not_in_use: state },
                        {
                            where: {
                                id: item_id,
                            },
                            transaction
                        }
                    ));
                    await this.exec(this.model.update(
                        { not_in_use: state },
                        {
                            where: {
                                shop_id: item_id,
                            },
                            transaction
                        }
                    ));
                    const list_product_shops = await this.exec(this.model.findAndCount(
                        {
                            where: {
                                shop_id: item_id,
                            }
                        }
                    ));
                    let array_ids: any = [];
                    if (list_product_shops.count > 0) {
                        for (let i = 0; i < list_product_shops.rows.length; i++) {
                            const item = list_product_shops.rows[i];
                            array_ids.push(item.product_id);
                        }
                    }
                    if (array_ids.length > 0) {
                        await this.exec(Product.update(
                            {
                                not_in_use: state
                            }, {
                            where: {
                                id: { $in: array_ids }
                            }
                        }
                        ));
                    }
                }
            } else if (type === 'product') {
                const product = this.exec(Product.findOne({
                    where: {
                        id: item_id
                    }
                }));
                if (product) {
                    await this.exec(Product.update(
                        { all_shop_not_in_use: state },
                        {
                            where: {
                                id: item_id,
                            },
                            transaction
                        }
                    ));
                    await this.exec(this.model.update(
                        { not_in_use: state },
                        {
                            where: {
                                product_id: item_id,
                            },
                            transaction
                        }
                    ));
                }
            }
            transaction.commit();
            return;
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
}