import { IsDateString, IsNotEmpty } from "class-validator";


export class OrderDto {
    @IsNotEmpty()
    product_name: string;

    @IsNotEmpty()
    customer_id: number;

    @IsNotEmpty()
    delivery_person_id: number;

    @IsDateString()
    order_date?: Date;
}