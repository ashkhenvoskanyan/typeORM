import { BaseEntity, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('skill_set')

export class Skill_Set extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    skill_set_name: string

    
}

