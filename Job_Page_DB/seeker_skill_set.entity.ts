import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_skill_set')

export class Seeker_Skill_Set extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_account_id: number

    @PrimaryColumn()
    skill_set_id: number

    @Column()
    skill_level: number
}