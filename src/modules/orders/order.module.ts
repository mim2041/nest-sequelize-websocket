import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { ordersProviders } from "./order.provider";
import { OrderController } from "./order.controller";


@Module({
    providers: [ OrderService, ...ordersProviders],
    controllers: [ OrderController ],
})

export class OrderModule { }