




export interface UserData {
  role: string;
  email: string;
  password?: string;
}


export const UserList: UserData[] = [

  {
    role: "admin",
    email: "test@test.com",
    password: "toto"
  }


]
