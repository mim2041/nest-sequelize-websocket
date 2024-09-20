import { IsDateString, IsNotEmpty } from "class-validator";


export class OrderDto {
    @IsNotEmpty()
    customer_id: number;

    @IsNotEmpty()
    delivery_person_id: number;

    @IsDateString()
    order_date?: Date;
}