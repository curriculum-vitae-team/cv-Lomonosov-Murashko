import { Autocomplete, TextField } from "@mui/material";
import { Project } from "@interfaces/project.interface";
import { Controller, FieldValues } from "react-hook-form";
import { ErrorToast } from "../ErrorToast";
import { Loader } from "../Loader";
import { AutocompleteWrapper } from "./ProjectAutocomplete.styles";
import { ProjectAutocompleteProps } from "./ProjectAutocomplete.types";
import React from "react";

export const ProjectAutocomplete = <T extends FieldValues>({
  control,
  name,
  projects,
  existingProjects,
  error,
  isLoading,
  defaultValue,
}: ProjectAutocompleteProps<T>) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorToast message={error} />
      ) : (
        <AutocompleteWrapper>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { ref, onChange, ...field } }) => {
              return (
                <Autocomplete
                  multiple
                  id="tags-projects"
                  defaultValue={[...(existingProjects || defaultValue)]}
                  options={projects.projects}
                  getOptionLabel={(project) => project.name}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(e: React.SyntheticEvent, data: Project[]) =>
                    onChange(data.map((project: Project) => project.id))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...field}
                      inputRef={ref}
                      variant="standard"
                      label="Projects"
                      placeholder=""
                    />
                  )}
                />
              );
            }}
          />
        </AutocompleteWrapper>
      )}
    </>
  );
};
