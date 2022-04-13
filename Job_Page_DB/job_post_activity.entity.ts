import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('job_post_activity')

export class Job_Post_Activity extends BaseEntity{

    @PrimaryColumn()
    user_account_id: number

    @PrimaryColumn()
    job_post_id: number

    @Column()
    apply_date: Date
}