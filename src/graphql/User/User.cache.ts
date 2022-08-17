import { CacheUpdaterFunction } from "src/types";
import {
  DeleteUserInput,
  DeleteUserOutput,
  UserCvsData,
  UsersData,
} from "./User.interface";
import { GET_USERS } from "./User.queries";
import { GET_USER_CVS } from "@graphql/User/User.queries";
import { UnbindCvOutput, UnbindCvInput } from "../Cv/Cv.interface";

export const deleteUserCacheUpdate =
  (id: string): CacheUpdaterFunction<DeleteUserOutput, DeleteUserInput> =>
  (cache, { data }) => {
    const existingUsers = cache.readQuery<UsersData>({ query: GET_USERS });

    if (existingUsers && data?.deleteUser.affected) {
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: existingUsers.users.filter((user) => user.id !== id),
        },
      });
    }
  };
