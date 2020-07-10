import { Entity, Column } from "typeorm";

import { BaseEntity } from "./BaseEntity";

@Entity()
export class Profile extends BaseEntity {

  @Column()
  gender: string;


}