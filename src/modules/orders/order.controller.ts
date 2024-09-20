import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order as OrderEntity } from "./order.entity";
import { AuthGuard } from "@nestjs/passport";
import { OrderDto } from "./dto/order.dto";


@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    async findAll() {
        // get all posts in the db
        return await this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<OrderEntity> {
        // find the post with this id
        const order = await this.orderService.findOneById(id);

        // if the post doesn't exit in the db, throw a 404 error
        if (!order) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // if post exist, return the post
        return order;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() post: OrderDto, @Request() req): Promise<OrderEntity> {
        // create a new post and return the newly created post
        return await this.orderService.create(post, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() post: OrderDto, @Request() req): Promise<OrderEntity> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedOrder } = await this.orderService.update(id, post, req.user.id);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return updatedOrder;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the post with this id
        const deleted = await this.orderService.delete(id, req.user.id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}