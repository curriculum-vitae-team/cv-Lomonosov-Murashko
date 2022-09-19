import { useQuery } from "@apollo/client";
import { Autocomplete, TextField } from "@mui/material";
import { ProjectsData } from "@src/graphql/Project/Project.interface";
import { GET_PROJECTS } from "@src/graphql/Project/Project.queries";
import { Project } from "@src/interfaces/project.interface";
import { useState } from "react";
import { ErrorToast } from "../ErrorToast";
import { Loader } from "../Loader";

export const ProjectAutocomplete = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useQuery<ProjectsData>(GET_PROJECTS, {
    onCompleted: () => {
      setIsLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleAutocompleteChange = (
    e: React.SyntheticEvent,
    data: Project[],
  ) => {
    console.log(data);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorToast message={error} />
      ) : (
        data?.projects && (
          <Autocomplete
            multiple
            id="tags-projects"
            options={data.projects}
            onChange={handleAutocompleteChange}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Projects"
                placeholder=""
              />
            )}
          />
        )
      )}
    </>
  );
};
