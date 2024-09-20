import { ORDERS_REPOSITORY } from "src/core/constants";
import { Order } from "./order.entity";


export const ordersProviders = [{
    provide: ORDERS_REPOSITORY,
    useValue: Order,
}]