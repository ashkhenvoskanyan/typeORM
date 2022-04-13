import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('company')

export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    company_name: string

    @Column()
    profile_description: string

    @Column()
    establishment_date: Date

    @Column()
    company_website_url: string 

    @Column()
    bussines_stream_id: number
}
