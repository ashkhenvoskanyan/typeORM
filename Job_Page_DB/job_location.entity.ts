import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_location')

export class Job_Location extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    street_address: string

    @Column()
    city: string

    @Column()
    country: string
    
}