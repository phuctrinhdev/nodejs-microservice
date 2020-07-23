import {
    Sequelize,
    sequelize
} from '@/models'
import { errorService, shopService } from '@/services';
const schedule = require('node-schedule');
export class ScheduleService {

    scheduleAll() {
        this.scheduleShopUpdate();
    }
    scheduleShopUpdate() {
        schedule.scheduleJob({ second: 0, minute: 0, hour: 0, dayOfWeek: 0 }, async () => {
            await shopService.scheduleUpdate();
        });
    }
}