import { Entity, Column, JoinColumn, OneToOne, OneToMany } from 'typeorm'

import { BaseEntity } from './BaseEntity'
// import { Profile } from "./ProfileEntity"
import { Item } from './ItemEntity'

import { UserRoles } from 'src/constants/userRoles'

@Entity()
export class User extends BaseEntity {
  // @Column('enum', {
  //   enum: UserRoles,
  // })
  // role: UserRoles

  @Column()
  email: string

  @Column()
  password: string

  // @OneToOne(type => Profile)
  // @JoinColumn()
  // profile: Profile

  @OneToMany((type) => Item, (item) => item.user)
  items: Item[]
}
