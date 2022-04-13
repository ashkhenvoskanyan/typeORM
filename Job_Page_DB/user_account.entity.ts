import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User_Type } from "./user_type.entity";

@Entity('user_account')

export class User_Account extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    email: string

    @PrimaryColumn()
    password: string

    @Column()
    date_of_birth: Date

    @Column()
    gender: string

    @Column()
    is_active: boolean

    @Column()
    contact_number: number

    @Column()
    user_image: string //"aaa.jpg" ask Saro

    // @ManyToOne(() => User_Type, user_type => user_type.users)
    // user: User_Type

}