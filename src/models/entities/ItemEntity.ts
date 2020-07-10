import {
  Entity,
  Column, ManyToOne
} from 'typeorm'

import { BaseEntity } from "./BaseEntity"
import { User } from './UserEntity'

@Entity()
export class Item extends BaseEntity {
  @Column()
  name: string

  @Column()
  description: string

  @ManyToOne(
    type => User,
    user => user.items,
  )
  user: User
}
