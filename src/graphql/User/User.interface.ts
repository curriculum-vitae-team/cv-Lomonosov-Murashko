/* Queries */

import { ProfileInput, Profile } from "../Profile/Profile.interface";

export interface UsersData {
  users: User[];
}

export interface UserInfoData {
  user: UserInfo;
}

export interface UserCvsData {
  user: {
    cvs: UserCVEntry[];
  };
}

export interface UserFullnameData {
  user: {
    id: string;
    profile: {
      first_name: string;
      last_name: string;
    };
  };
}
/* Mutations */

export interface DeleteUserInput {
  id: string;
}

export interface DeleteUserOutput {
  deleteUser: {
    affected: number;
  };
}

export interface UpdateUserInput {
  id: string;
  user: {
    profile?: ProfileInput;
    cvsIds?: string[];
  };
}

export interface UpdateUserOutput {
  updateUser: User;
}
/* Parts */

// For table

export interface User {
  id: string;
  email: string;
  profile: Profile;
}
// For detailed user info (may contain additional properties in the future)

export interface UserInfo {
  id: string;
  email: string;
  profile: Profile;
}

export interface UserCVEntry {
  id: string;
  name: string;
}
