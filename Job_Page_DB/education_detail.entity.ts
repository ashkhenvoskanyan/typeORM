import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('educatio_detail')

export class Education_Detail extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_accoumt_id: number

    @PrimaryColumn()
    certification_degree_name: string

    @PrimaryColumn()
    major: string

    @Column()
    university_name: string

    @Column()
    Starting_date: Date

    @Column()
    completion_date: Date
}