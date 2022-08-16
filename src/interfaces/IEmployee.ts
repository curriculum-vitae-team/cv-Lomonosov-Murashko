export interface IEmployee {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface IEmployeeTable extends IEmployee {
  department: string;
  specialization: string;
}

export interface IEmployeeInfo extends IEmployee {
  departmentId: string;
  specialization: string;
}
