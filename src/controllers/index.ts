import { CrudController } from './crudController'
import { AuthController } from './authController'
import { EmployeeController } from './crud/employeeController';
import { UserController } from './crud/userController';
import { ShopController } from './crud/shopController';
import { ProductController } from './crud/productController';
import { ProductShopController } from './crud/productShopController';
import { PriceProductController } from './crud/priceProductController';
import { CountryController } from './crud/countryController';
import { FoodController } from './crud/foodController';
import { ReviewController } from './crud/reviewController';
import { FoodProductController } from './crud/foodProductController';
import { TransalteController } from './crud/translateController';
import { SiteMapController } from './crud/siteMapController';
import { TagController } from './crud/tagController';
// import {
//     AdminController
// } from './crud/adminController'


const authController = new AuthController()
const employeeController = new EmployeeController()
const userController = new UserController()
const shopController = new ShopController()
const productController = new ProductController()
const productShopController = new ProductShopController()
const priceProductController = new PriceProductController()
const countryController = new CountryController()
const foodController = new FoodController()
const reviewController = new ReviewController()
const foodProductController = new FoodProductController()
const translateController = new TransalteController()
const siteMapController = new SiteMapController();
const tagController = new TagController();
// Crud
//const adminController = new AdminController()


export {
    userController,
    productShopController,
    priceProductController,
    productController,
    foodController,
    foodProductController,
    reviewController,
    shopController,
    countryController,
    employeeController,
    CrudController,
    authController,
    translateController,
    siteMapController,
    tagController
}