import React, { useEffect } from "react";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { DatePickerFieldset } from "@components/DatePickerFieldset";
import { Button, DialogActions } from "@mui/material";
import { useForm } from "react-hook-form";
import { IProject } from "@interfaces/IProject";
import { ROUTE } from "@constants/route";
import { useNavigate } from "react-router";
import { ProjectInfoData } from "@graphql/Project/Project.interface";
import { resetProject } from "../../helpers";

type ProjectInfoFormProps = {
  onSubmit: any;
  data?: ProjectInfoData;
};

export const ProjectInfoForm = ({ onSubmit, data }: ProjectInfoFormProps) => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset, setError } = useForm<IProject>({
    defaultValues: {
      name: "",
      internalName: "",
      startDate: "",
      endDate: "",
      domain: "",
      description: "",
    },
  });

  // TODO: move resetProject method to another helper 
  useEffect(() => {
    data && reset(resetProject(data.project));
  }, [data, reset]);

  const onCancel: React.MouseEventHandler = (e) => {
    navigate(ROUTE.PROJECTS);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          isFullWidth={true}
          inputWidth="100%"
          required="Please, specify the field"
          label="Internal name"
          control={control}
          name="internalName"
        />
      </InfoFormWrapper>

      <InfoFormWrapper>
        <Fieldset
          required="Please, specify the field"
          label="Name"
          control={control}
          name="name"
        />
        <DatePickerFieldset
          control={control}
          label="Start date"
          name="startDate"
          onError={() => {
            setError("startDate", {
              type: "required",
              message: "Please, specify the correct date",
            });
          }}
          required={"Please, specify the field"}
        />
        <DatePickerFieldset
          control={control}
          label="End date"
          name="endDate"
          onError={() => {
            setError("endDate", {
              type: "required",
              message: "Please, specify the correct date",
            });
          }}
          required={"Please, specify the field"}
        />
      </InfoFormWrapper>
      <InfoFormWrapper>
        <Fieldset
          inputWidth="50%"
          isFullWidth={true}
          required="Please, specify the field"
          label="Domain"
          control={control}
          name="domain"
        />
      </InfoFormWrapper>

      <InfoFormWrapper>
        <Fieldset
          inputWidth="50%"
          isFullWidth={true}
          required="Please, specify the field"
          label="Description"
          control={control}
          name="description"
        />
      </InfoFormWrapper>

      <DialogActions>
        <Button type="submit" value="Save" variant="contained">
          Save
        </Button>
        <Button
          type="reset"
          value="Cancel"
          variant="outlined"
          color="info"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
};
