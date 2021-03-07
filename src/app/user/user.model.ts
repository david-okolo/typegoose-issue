import { getModelForClass, Prop, Ref } from "@typegoose/typegoose";
import { House } from "../house/house.model";

export class User {
  id: string;

  @Prop()
  name: string;

  @Prop({ ref: "House" })
  houses: Ref<House>[];
}

export const UserModel = getModelForClass(User);
