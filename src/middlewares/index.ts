import { AuthInfoMiddleware } from './authMiddleware'
import { BlockMiddleware } from './blockMiddleware'
import { QueryMiddleware } from './queryMiddleware' 
import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'
import { SuperAdminTypeMiddleware } from './superAdminTypeMiddleware';
import { AdminTypeMiddleware } from './adminTypeMiddleware';
import { CheckAuthMiddleware } from './checkAuthMiddleware';
import { NowMiddleware } from './nowMiddleware';

const authInfoMiddleware = new AuthInfoMiddleware()
const blockMiddleware = new BlockMiddleware()
const queryMiddleware = new QueryMiddleware()
const firebaseAuthMiddleware = new FirebaseAuthInfoMiddleware()
const superAdminTypeMiddleware = new SuperAdminTypeMiddleware()
const adminTypeMiddleware = new AdminTypeMiddleware()
const checkAuthMiddleware = new CheckAuthMiddleware()
const nowMiddleware = new NowMiddleware()


export { 
    authInfoMiddleware,
    nowMiddleware,
    blockMiddleware,
    queryMiddleware,
    firebaseAuthMiddleware,
    superAdminTypeMiddleware,
    adminTypeMiddleware,
    checkAuthMiddleware
}