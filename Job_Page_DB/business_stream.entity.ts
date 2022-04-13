import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bussiness_stream')

export class Bussiness_Stream extends BaseEntity{

    @PrimaryGeneratedColumn()
    bussines_stream_id: number

    @Column()
    bussines_stream_name: string
}