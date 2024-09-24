import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.entity";


@Table
export class Order extends Model<Order> {
    

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customer_id: number;

    @BelongsTo(() => User, 'customer_id')
    customer: User;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    delivery_person_id: number;

    @BelongsTo(() => User, 'delivery_person_id')
    delivery_person: User;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    order_date: Date;
}