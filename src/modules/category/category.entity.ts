import { Column, DataType, Model, Table } from "sequelize-typescript";



@Table
export class Category extends Model<Category> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    products: string[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    createdAt?: any;
}