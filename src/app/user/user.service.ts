import { inject, injectable } from "tsyringe";
import { Repository } from "../repository";
import { User } from "./user.model";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository") private userRepository: Repository<User>
  ) {}

  getUserStatus = async (userId: string) => {
    const user = await this.userRepository.findOne({ id: userId });

    const totalNumberOfWalls: number = user.houses.reduce(
      (accumulator, current) => {
        return accumulator + current.walls;
      },
      0
    );

    return {
      totalNumberOfWalls,
    };
  };
}
