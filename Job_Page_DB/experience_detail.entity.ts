import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('experience_detail')

export class Experience_Detail extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_acount_id: number

    @Column()
    is_current_job: string

    @PrimaryColumn()
    start_date: Date

    @PrimaryColumn()
    end_date: Date

    @Column()
    job_title: string

    @Column()
    company_name: string

    @Column()
    description: string
    
}