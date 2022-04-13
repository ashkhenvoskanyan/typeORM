import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_type')

export class Job_Type extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    job_type: string
}