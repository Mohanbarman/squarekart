import { getManager } from "typeorm";
import { hashText } from "../../utils/bcryptHelper";
import { UserEntity } from "../UserEntity";

export const userUtils = {
  add: async (user: Partial<UserEntity>) => {
    const manager = getManager();

    const _user = new UserEntity();
    _user.firstName = user.firstName;
    _user.lastName = user.lastName;
    _user.email = user.email;
    _user.password = await hashText(user.password);

    return manager.save(_user);
  },

  isEmailExists: async (email: string) => {
    const manager = getManager();
    const users = await manager.find(UserEntity, { where: { email } });
    if (users.length > 0) return true;
    return false;
  },

  getByEmail: async (email: string) => {
    const manager = getManager();
    return manager.findOne(UserEntity, { where: { email } });
  },

  getById: async (id: number) => {
    const manager = getManager();
    return manager.findOne(UserEntity, { where: { id } });
  },
};
