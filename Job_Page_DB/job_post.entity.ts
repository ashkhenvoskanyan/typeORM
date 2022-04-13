import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post')

export class Job_Post extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_post_id: number

    @Column()
    posted_by_id: number

    @PrimaryColumn()
    job_type_id: number

    @PrimaryColumn()
    company_id: number

    @Column()
    created_date: Date

    @Column()
    job_description: string

    @Column()
    job_location_id: number

    @PrimaryColumn()
    is_active: string
    
}