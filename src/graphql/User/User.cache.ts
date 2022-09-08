import { CacheUpdaterFunction } from "src/types";
import { DeleteUserInput, DeleteUserOutput, UsersData } from "./User.interface";
import { GET_USERS } from "./User.queries";

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
