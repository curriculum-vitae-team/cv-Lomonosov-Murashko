/* Queries */

import { ProfileInput, Profile } from "../Profile/Profile.interface";
import { ProjectInfo } from "../Project/Project.interface";
import { Skills } from "../Skills/Skills.interface";

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
  cvs: UserCvs[];
}

export interface UserCVEntry {
  id: string;
  name: string;
}

export interface UserCvs {
  id: string;
  name: string;
  description: string;
  projects: ProjectInfo;
  skills: Skills;
  languages: UserLanguages;
}

export interface UserLanguages {
  language_name: string;
  proficiency: string;
}
