import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'

import { Profile } from "./ProfileEntity";
import { Group } from "./GroupEntity";

import { UserRoles } from 'src/constants/userRoles'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("enum", {
    enum: UserRoles
  })
  role: UserRoles;

  @Column()
  email: string

  @Column()
  password: string

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(type => Group, group => group.user)
  groups: Group[]

  @CreateDateColumn({ nullable: true })
  createdAt: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date
}
