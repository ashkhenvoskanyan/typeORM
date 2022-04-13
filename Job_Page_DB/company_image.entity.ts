import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('company_image')

export class Company_Image extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    company_image: string //(aaa.jpg)
    
    @Column()
    company_id: number
}