/* Queries */

export interface UsersData {
  users: User[];
}

export interface UserInfoData {
  user: UserInfo;
}

export interface UserCvsData {
  user: {
    cvs: CVEntry[];
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
  updateUser: {
    id: string;
    email: string;
  };
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
interface Profile {
  first_name: string;
  last_name: string;
  department: Department;
  specialization: string;
}
interface ProfileInput {
  first_name: string;
  last_name: string;
  departmentId: string;
  specialization: string;
  skills: string[];
  languages: string[];
}
interface Department {
  name: string;
  id: string;
}
interface CVEntry {
  id: string;
  name: string;
}
