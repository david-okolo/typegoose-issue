import { Prop } from "@typegoose/typegoose";

export class House {
  id: string;

  @Prop()
  walls: number;

  @Prop()
  paintColor: string;
}
