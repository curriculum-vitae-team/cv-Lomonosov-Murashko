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

      cache.evict({ id });
    }
  };

// export const unbindCvCacheUpdate =
//   (userId: string): CacheUpdaterFunction<UnbindCvOutput, UnbindCvInput> =>
//   (cache, { data }) => {
//     const existingUserCvs = cache.readQuery<UserCvsData>({
//       query: GET_USER_CVS,
//     });

//     if (existingUserCvs && data?.unbindCv) {
//       const { id } = data.unbindCv;
//       cache.writeQuery({
//         query: GET_USER_CVS,
//         data: {
//           user: {
//             cvs: existingUserCvs.user.cvs.filter((cv) => cv.id !== id),
//           },
//         },
//       });
//     }
//   };

// export const unbindCvCacheUpdate =
//   (userId: string): CacheUpdaterFunction<UnbindCvOutput, UnbindCvInput> =>
//   (cache, { data }) => {
//     const existingUserCvs = cache.readQuery<UserCvsData>({
//       query: GET_USER_CVS,
//     });

//     if (existingUserCvs && data?.unbindCv) {
//       const { id } = data.unbindCv;
//       cache.writeQuery({
//         query: GET_USER_CVS,
//         data: {
//           user: {
//             cvs: existingUserCvs.user.cvs.filter((cv) => cv.id !== id),
//           },
//         },
//       });
//     }
//   };
