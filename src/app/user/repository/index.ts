import { registry } from "tsyringe";
import { UserModel } from "../user.model";
import { MongoUserRepository } from "./mongodb";

@registry([
  {
    token: "UserRepository",
    useFactory: () => {
      const repo = new MongoUserRepository(UserModel);
      return repo;
    },
  },
])
export class UserRepository {}
