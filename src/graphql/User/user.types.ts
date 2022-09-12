import { User } from "@interfaces/user.interface";
import { AuthInput } from "../Auth/Auth.types";
import { ProfileInput } from "../Profile/profile.types";
import { DeleteInput, DeleteResult } from "../delete.types";

export type GetUserResult = {
  user: User;
};

export type GetUsersResult = {
  users: User[];
};

export type CreateUserInput = {
  auth: AuthInput;
  profile: ProfileInput;
  cvsIds: string[];
  departmentId: string;
  positionId: string;
};

export type CreateUserResult = {
  createUser: {
    user: User;
  };
};

export type UpdateUserInput = {
  profile: ProfileInput;
  cvsIds: string[];
  departmentId: string;
  positionId: string;
};

export type UpdateUserResult = {
  updateUser: {
    user: User;
  };
};

export type DeleteUserInput = DeleteInput;

export type DeleteUserResult = {
  deleteUser: DeleteResult;
};