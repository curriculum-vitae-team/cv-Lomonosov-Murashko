import { ApolloCache } from "@apollo/client";
import { DeleteUserOutput, UsersData } from "./User.interfaces";
import { GET_USERS } from "./User.queries";

export const deleteUserCacheUpdate =
  (id: string) =>
  (
    cache: ApolloCache<unknown>,
    { data }: { data?: DeleteUserOutput | null },
  ) => {
    const existingUsers = cache.readQuery<UsersData>({ query: GET_USERS });

    if (existingUsers && data?.deleteUser.affected) {
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: existingUsers.users.filter((user) => user.id !== id),
        },
      });

      cache.evict({ id });
    }
  };
