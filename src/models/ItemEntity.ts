import {
  Entity,
  Column
} from 'typeorm'

import { BaseEntity } from "./BaseEntity";

@Entity()
export class Item extends BaseEntity {
  @Column()
  name: string

  @Column()
  description: string
}
