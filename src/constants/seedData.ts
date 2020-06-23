
import { UserDto } from 'src/models/dto/UserDto';
import { GroupDto } from 'src/models/dto/GroupDto';


export const UserList: UserDto[] = [
  {
    role: "admin",
    email: "admin@test.com",
    password: "test"
  },
  {
    role: "editor",
    email: "editor@test.com",
    password: "test"
  },
  {
    role: "user",
    email: "user@test.com",
    password: "test"
  }
]

export const GroupList: GroupDto[] = [
  {
    name: "team"
  }
]
