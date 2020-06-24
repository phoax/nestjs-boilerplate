import {
  Entity,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import { BaseEntity } from "./BaseEntity";
import { User } from "./UserEntity";

@Entity()
export class Group extends BaseEntity {
  @Column()
  name: string

  @Column()
  description: string

  @OneToOne(type => User, user => user.id)
  @JoinColumn()
  owner: User;

  @ManyToOne(type => User, user => user.groups)
  user: User;
}
