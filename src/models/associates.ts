import {
    Employee,
    User,
    Shop,
    Product,
    ProductShop,
    PriceHistory,
    Country,
    Food,
    Review,
    FoodProduct
} from "@/models/tables";

// FoodProduct
FoodProduct.belongsTo(Food, {
    foreignKey: 'food_id',
    as: 'food'
});
Food.hasMany(FoodProduct, {
    foreignKey: 'food_id',
    as: 'products_of_food'
});
FoodProduct.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(FoodProduct, {
    foreignKey: 'product_id',
    as: 'foods_of_product'
});
// Review
Review.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(Review, {
    foreignKey: 'product_id',
    as: 'comments'
});
// ProductShop
ProductShop.belongsTo(Shop, {
    foreignKey: 'shop_id',
    as: 'shop'
});
Shop.hasMany(ProductShop, {
    foreignKey: 'shop_id',
    as: 'products_of_shop'
});
ProductShop.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(ProductShop, {
    foreignKey: 'product_id',
    as: 'shops_of_product'
});
// Product
Product.belongsTo(Shop, {
    foreignKey: 'shop_id',
    as: 'shop'
});
Shop.hasMany(Product, {
    foreignKey: 'shop_id',
    as: 'products'
});

Product.belongsTo(Country, {
    foreignKey: 'country_id',
    as: 'nation'
});
Country.hasMany(Product, {
    foreignKey: 'country_id',
    as: 'products'
});

// PriceHistory
PriceHistory.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(PriceHistory, {
    foreignKey: 'product_id',
    as: 'price_histories'
});
console.log('run associates')