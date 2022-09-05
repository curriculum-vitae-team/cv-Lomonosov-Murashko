import React, { memo, useEffect } from "react";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { DatePickerFieldset } from "@components/DatePickerFieldset";
import { Button, DialogActions } from "@mui/material";
import { useForm } from "react-hook-form";
import { IProject } from "@interfaces/IProject";
import { ROUTE } from "@constants/route";
import { useNavigate } from "react-router";
import { resetProject } from "../../helpers";
import { ProjectInfoFormProps } from "./ProjectInfoForm.types";
import { SaveButtonWithAdminAccess } from "@src/components/FormSaveButton";

export const ProjectInfoForm = memo(
  ({ onSubmit, data }: ProjectInfoFormProps) => {
    const navigate = useNavigate();
    const { control, handleSubmit, reset } = useForm<IProject>({
      mode: "all",
      defaultValues: {
        name: "",
        internalName: "",
        startDate: "",
        endDate: "",
        domain: "",
        description: "",
        teamSize: 0,
      },
    });

    useEffect(() => {
      data && reset(resetProject(data.project));
    }, [data, reset]);

    const onCancel: React.MouseEventHandler = () => {
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
            required={"Please, specify the correct date"}
          />
          <DatePickerFieldset
            control={control}
            label="End date"
            name="endDate"
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
          <Fieldset
            required="Please, specify the field"
            label="Team size"
            control={control}
            name="teamSize"
          />
          {/* TODO: add skills here */}
        </InfoFormWrapper>

        <DialogActions>
          <SaveButtonWithAdminAccess />
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
  },
);
