import { BaseEntity, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User_Account } from "./user_account.entity";

@Entity('user_type')

export class User_Type extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    user_type_name: string

    // @OneToMany(() => User_Account, (user_acount) => user_acount.user_type)
    // users: User_Account[]

}

