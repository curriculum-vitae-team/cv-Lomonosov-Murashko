import React, { memo, useEffect, useState } from "react";
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
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { DynamicFieldsetGroupWrapper } from "@components/styled/DynamicFieldsetGroupWrapper";
import { SkillsInput } from "@pages/EmployeesPage/pages/EmployeeInfo/components/SkillsInput";

export const ProjectInfoForm = memo(
  ({ onSubmit, data }: ProjectInfoFormProps) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { control, handleSubmit, reset, getValues } = useForm<IProject>({
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
      <form
        style={{ width: "100%", padding: "1em" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InfoFormWrapper>
          <Fieldset
            required="Please, specify the field"
            label="Internal name"
            control={control}
            name="internalName"
          />
          <Fieldset
            required="Please, specify the field"
            label="Name"
            control={control}
            name="name"
          />
        </InfoFormWrapper>

        <InfoFormWrapper>
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
            required="Please, specify the field"
            label="Domain"
            control={control}
            name="domain"
          />
          <Fieldset
            required="Please, specify the field"
            label="Team size"
            control={control}
            name="teamSize"
          />
        </InfoFormWrapper>

        <InfoFormWrapper>
          <Fieldset
            inputWidth="31.25em"
            isMultiline={true}
            required="Please, specify the field"
            label="Description"
            control={control}
            name="description"
          />
          {/* <DynamicFieldsetGroupWrapper>
            <SkillsInput
              control={control}
              skillsInForm={getValues().techStack}
              onError={(error) => setError(error.message)}
            />
          </DynamicFieldsetGroupWrapper> */}
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
