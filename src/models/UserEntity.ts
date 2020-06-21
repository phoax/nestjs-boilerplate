import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

enum Roles {
  Admin = "Admin",
  User = "User",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("enum", {
    enum: Roles
  })
  role: Roles;

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn({ nullable: true })
  createdAt: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date
}
