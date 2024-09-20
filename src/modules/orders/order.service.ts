import { Inject, Injectable } from "@nestjs/common";
import { ORDERS_REPOSITORY } from "src/core/constants";
import { Order } from "./order.entity";
import { OrderDto } from "./dto/order.dto";


@Injectable()
export class OrderService {
    constructor(@Inject(ORDERS_REPOSITORY) private readonly orderRepository: typeof Order) { }

    async create(order: OrderDto, customer_id: number): Promise<Order> {
        return await this.orderRepository.create<Order>({ ...order, customer_id });
    }

    async findOneById(id: number): Promise<Order> {
        return await this.orderRepository.findOne<Order>({
            where: { id } ,
            include: [{ model: Order, attributes: { exclude: ['password']}}]
        });
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.findAll<Order> ({
            include: [{ model: Order, attributes: { exclude: ['password']}}]
        });
    }

    async delete(id, customer_id: number) {
        return await this.orderRepository.destroy({ where: { id, customer_id } });
    }

    async update(id, data, customer_id ) {
        const [ numberOfAffectedRows, [updatedOrder]] = await this.orderRepository.update({ ...data}, { where: { id, customer_id }, returning: true});

        return { numberOfAffectedRows, updatedOrder };
    }
}

