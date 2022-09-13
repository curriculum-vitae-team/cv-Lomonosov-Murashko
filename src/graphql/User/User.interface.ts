/* Queries */

import { SkillMastery } from "../Cv/Cv.interface";
import { Department } from "../Entity/Department/Department.interface";
import { Position } from "../Entity/Position/Position.interface";
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

export interface UsersNamesIdsData {
  users: UserNameIds[];
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
    profile: ProfileInput;
    cvsIds: string[];
    departmentId?: string;
    positionId?: string;
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
      positionId: string;
      skills: SkillMastery[];
      languages: UserLanguages[];
    };
    cvsIds: string[];
    role: string;
  };
}

export interface CreateUserOutput {
  user: UserInfo;
}
/* Parts */

// For table

export interface User {
  id: string;
  email: string;
  role: string;
  profile: Profile;
  department: Department;
  position_name: string;
  position: Position;
}
// For detailed user info (may contain additional properties in the future)

export interface UserInfo {
  id: string;
  email: string;
  role: string;
  cvs: UserCv[];
  department: Department;
  position_name: string;
  position: Position;
  profile: Profile;
}

export interface UserCVEntry {
  id: string;
  name: string;
}

export interface UserProfile {
  full_name: string;
  skills: SkillMastery[];
  languages: UserLanguages[];
  position_name: string;
}

export interface UserFullInfo {
  email: string;
  profile: UserProfile;
}

export interface UserLanguages {
  language_name: string;
  proficiency: string;
}

export interface UserCv {
  id: string;
  name: string;
  description: string;
  projects: ProjectInfo;
  skills: Skills;
  languages: UserLanguages;
}

export interface UserNameIds {
  id: string;
  profile: {
    full_name: string;
  };
}
