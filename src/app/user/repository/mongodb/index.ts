import { User } from "../../user.model";
import { Repository } from "../../../repository";
import { ReturnModelType } from "@typegoose/typegoose";

export class MongoUserRepository implements Repository<User> {
  constructor(private model: ReturnModelType<typeof User>) {}

  findOne = async (condition: Partial<User>): Promise<User> => {
    const user = await this.model.findOne(condition).populate("houses");

    return user;
  };
}
