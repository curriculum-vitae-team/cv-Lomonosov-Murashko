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

export interface CreateUserInput {
  user: {
    auth: {
      email: string;
      password: string;
    };
    profile: {
      first_name: string;
      last_name: string;
      departmentId: string;
      specialization: string;
      skills: string[];
      languages: string[];
    };
    cvsId: string[];
  };
}

export interface CreateUserOutput {
  id: string;
  email: string;
}
/* Parts */

// For table

export interface User {
  id: string;
  email: string;
  role: string;
  profile: Profile;
}
// For detailed user info (may contain additional properties in the future)

export interface UserInfo {
  id: string;
  email: string;
  role: string;
  profile: Profile;
}

export interface UserCVEntry {
  id: string;
  name: string;
}

export interface UserProfile {
  full_name: string;
  skills: {
    skill_name: string;
    mastery: string;
  };
  languages: {
      language_name: string;
      proficiency: string;
    };
}

export interface UserFullInfo {
  email: string;
  profile: UserProfile;
}