import { useQuery } from "@apollo/client";
import { Stack, Typography } from "@mui/material";
import { DynamicFieldset } from "@src/components/DynamicFieldset";
import { DynamicArrayField } from "@src/components/DynamicFieldset/components/DynamicArrayField";
import { Proficiency } from "@src/constants/language-proficiency.constants";
import { GetLanguagesData } from "@src/graphql/Entity/Language/Language.interface";
import { GET_LANGUAGES } from "@src/graphql/Entity/Language/Language.queries";
import { useFieldArray } from "react-hook-form";
import { LanguagesInputProps } from "./LanguagesInput.types";

export const LanguagesInput = ({
  onError,
  control,
  languagesInForm,
}: LanguagesInputProps) => {
  const {
    fields: languagesFields,
    append: appendLanguage,
    remove: removeLanguage,
    update: updateLanguage,
  } = useFieldArray({
    control,
    name: "user.profile.languages",
  });

  const { data: languagesData } = useQuery<GetLanguagesData>(GET_LANGUAGES, {
    onError,
  });

  const handleLanguageDelete = (name: string) => {
    removeLanguage(
      languagesInForm.findIndex((language) => language.language_name === name),
    );
  };

  const handleLanguageChange = (name: string, newValue: string) => {
    if (isProficiency(newValue)) {
      updateLanguage(
        languagesInForm.findIndex(
          (language) => language.language_name === name,
        ),
        { language_name: name, proficiency: newValue },
      );
    }

    function isProficiency(value: string): value is Proficiency {
      if (Object.values(Proficiency).includes(value as Proficiency)) {
        return true;
      }

      return false;
    }
  };

  const getAvailable = () => {
    return languagesData
      ? languagesData.languages
          .filter(
            (language) =>
              !languagesFields.find(
                (field) => field.language_name === language.name,
              ),
          )
          .map((language) => ({ entryName: language.name }))
      : [];
  };

  return (
    <>
      <Stack gap={2} justifyContent="start">
        <Typography variant="h5" component="h2">
          Languages
        </Typography>
        <DynamicFieldset
          onNew={(entryName: string) => {
            appendLanguage({
              language_name: entryName,
              proficiency: Proficiency.A1,
            });
          }}
          inputEntries={getAvailable()}
        >
          {languagesFields.map((field, index) => (
            <DynamicArrayField
              key={field.id}
              entryName={field.language_name}
              possibleValues={Proficiency}
              onDelete={handleLanguageDelete}
              onChange={handleLanguageChange}
              value={field.proficiency}
            />
          ))}
        </DynamicFieldset>
      </Stack>
    </>
  );
};
