import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('job_post_skills_set')

export class Job_Post_Skills_Set extends BaseEntity{

    @PrimaryColumn()
    skill_set_id: number

    @PrimaryColumn()
    job_post_id: number

    @Column()
    skill_level: number
}