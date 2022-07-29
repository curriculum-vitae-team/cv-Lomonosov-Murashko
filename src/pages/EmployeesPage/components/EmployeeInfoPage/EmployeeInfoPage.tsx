import { Input, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Breadcrumb } from "../../../../components/Breadcrumb";

export const EmployeeInfoPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Breadcrumb />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Typography>First Name</Typography>
          <input {...register("firstName")} />
        </label>
        <label>
          <Typography>Last Name</Typography>
          <input {...register("lastName")} />
        </label>
        <label>
          <Typography>Email</Typography>
          <input {...register("email")} />
        </label>
        <label>
          <Typography>Department</Typography>
          <input {...register("department")} />
        </label>
        <label>
          <Typography>Specialization</Typography>
          <input {...register("specialization")} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
