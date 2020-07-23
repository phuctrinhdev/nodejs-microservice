import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { UtilService } from './utilService'
import { FirebaseService } from './firebaseService'
import {
    EmployeeService
} from './crud/employeeService'


// Crud
import { ICrudExecOption, ICrudOption, CrudService } from './crudService'
import { UserService } from './crud/userService';
import { ShopService } from './crud/shopService';
import { ProductService } from './crud/productService';
import { ProductShopService } from './crud/productShopService'
import { PriceProductService } from './crud/priceProductService'
import { CountryService } from './crud/countryService'
import { FoodService } from './crud/foodService'
import { ReviewService } from './crud/reviewService'
import { FoodProductService } from './crud/foodProductService'
import { TranslateService } from './crud/translateService'
import { SiteMapService } from './crud/siteMapService'
import { ScheduleService } from './scheduleService'
import { TagService } from './crud/tagService'
// import { SampleCrudService } from './crud/sampleCrudService.mongo'


const errorService = new ErrorService()
const tokenService = new TokenService()
const utilService = new UtilService()
const firebaseService = new FirebaseService()
const employeeService = new EmployeeService()
const userService = new UserService()
const shopService = new ShopService()
const productService = new ProductService()
const productShopService = new ProductShopService()
const priceProductService = new PriceProductService()
const countryService = new CountryService()
const foodService = new FoodService()
const reviewService = new ReviewService()
const foodProductService = new FoodProductService()
const translateService = new TranslateService();
const siteMapService = new SiteMapService();
const scheduleService = new ScheduleService();
const tagService = new TagService();
// Crud
//const adminService = new AdminService()

export {
    shopService,
    productShopService,
    userService,
    countryService,
    foodService,
    foodProductService,
    productService,
    priceProductService,
    employeeService,
    reviewService,
    errorService,
    tokenService,
    utilService,
    firebaseService,
    CrudService,
    ICrudExecOption,
    ICrudOption,
    translateService,
    siteMapService,
    scheduleService,
    tagService
}