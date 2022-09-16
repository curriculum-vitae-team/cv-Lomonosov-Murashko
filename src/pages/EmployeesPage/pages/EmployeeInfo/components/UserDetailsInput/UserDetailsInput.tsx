import { useQuery } from "@apollo/client";
import { Fieldset } from "@src/components/Fieldset";
import { InfoFormWrapper } from "@src/components/styled/InfoFormWrapper";
import { DepartmentsData } from "@src/graphql/Entity/Department/Department.interface";
import { GET_DEPARTMENTS } from "@src/graphql/Entity/Department/Department.queries";
import { PositionsNamesIdsData } from "@src/graphql/Entity/Position/Position.interface";
import { GET_POSITIONS_NAMES_IDS } from "@src/graphql/Entity/Position/Position.queries";
import { SelectEntry } from "@src/graphql/shared/components/SelectEntry";
import { GetUserResult } from "@src/graphql/User/User.interface";
import { GET_USER_INFO } from "@src/graphql/User/User.queries";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UserDetailsInputProps } from "./UserDetailsInput.types";

export const UserDetailsInput = ({
  onError,
  control,
  refetchObservable,
}: UserDetailsInputProps) => {
  // при нажатии на кнопку там затриггерить все рефетчи тут
  const { data: departments, refetch: refetchDepartments } =
    useQuery<DepartmentsData>(GET_DEPARTMENTS, {
      onError,
    });

  const { data: positions, refetch: refetchPositions } =
    useQuery<PositionsNamesIdsData>(GET_POSITIONS_NAMES_IDS, {
      onError,
    });

  useEffect(() => {
    const refetchFunctions = [refetchDepartments, refetchPositions];
    refetchObservable.subscribe(...refetchFunctions);

    return () => {
      refetchObservable.unsubscribe(...refetchFunctions);
    };
  });

  return (
    <InfoFormWrapper>
      <Fieldset
        control={control}
        required="Please, specify the field"
        label="First Name"
        name="user.profile.first_name"
      />
      <Fieldset
        control={control}
        required="Please, specify the field"
        label="Last Name"
        name="user.profile.last_name"
      />
      <SelectEntry
        name="user.departmentId"
        control={control}
        title="Departments"
        entries={departments?.departments}
      />
      <SelectEntry
        name="user.positionId"
        control={control}
        title="Positions"
        entries={positions?.positions}
      />
    </InfoFormWrapper>
  );
};
