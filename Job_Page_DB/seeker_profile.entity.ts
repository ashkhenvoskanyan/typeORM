import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_profile')

export class Seeker_Profile extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_account_id: number

    @Column()
    first_name: string
    
    @Column()
    last_name: String

}