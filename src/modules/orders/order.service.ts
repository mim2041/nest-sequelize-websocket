import { Inject, Injectable } from "@nestjs/common";
import { ORDERS_REPOSITORY } from "src/core/constants";
import { Order } from "./order.entity";
import { OrderDto } from "./dto/order.dto";


@Injectable()
export class OrderService {
    constructor(@Inject(ORDERS_REPOSITORY) private readonly orderRepository: typeof Order) { }

    async create(order: OrderDto, customer_id: number): Promise<Order> {
        try{
            return await this.orderRepository.create<Order>({ ...order, customer_id });
        }
        catch(error){
            throw new Error(`Error: ${error.message}`);
        }
    }

    async findOneById(id: number): Promise<Order> {
        try{
            return await this.orderRepository.findOne<Order>({
                where: { id },
                attributes: { exclude: ['password'] },
            });
        }
        catch(error){
            throw new Error(`Error: ${error.message}`);
        }
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.findAll<Order> ({
            attributes: { exclude: ['password'] }
        });
    }

    async delete(id, customer_id: number) {
        return await this.orderRepository.destroy({ where: { id, customer_id } });
    }

    async update(id: number, data: Partial<OrderDto>, customer_id: number): Promise<{ numberOfAffectedRows: number, updatedOrder: Order }> {
        try {
            const [numberOfAffectedRows, [updatedOrder]] = await this.orderRepository.update(
                { ...data },
                { where: { id, customer_id }, returning: true }
            );
            console.log(id, customer_id);
            return { numberOfAffectedRows, updatedOrder };
        } catch (error) {
            console.error(`Error updating order with id ${id}:`, error);
            throw new Error(`Error updating order with id ${ id }: ${ error.message }`);
        }
    }

}

