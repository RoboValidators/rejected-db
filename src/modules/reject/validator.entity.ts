import { Entity, Column, PrimaryGeneratedColumn, VersionColumn } from "typeorm";

@Entity()
export default class Validator {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 500 })
  url: string;

  @Column({ length: 500 })
  reason: string;

  @VersionColumn()
  version: number;

}
