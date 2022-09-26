import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useErrorToast } from "@src/context/ErrorToastStore/ErrorToastStore";
import {
  UploadAvatarInput,
  UploadAvatarResult,
} from "@src/graphql/Avatar/Avatar.interface";
import { UPLOAD_AVATAR } from "@src/graphql/Avatar/Avatar.queries";
import { GET_ACCOUNT_INFO } from "@src/graphql/User/User.queries";
import { toBase64 } from "@src/helpers/toBase64";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Loader } from "../../../Loader";
import { UserProfileContext } from "../UserProfile/UserProfile";
import { Avatar, StyledAccountCircleIcon } from "./AvatarSelector.styles";

const AvatarSelector = () => {
  const { user } = useContext(UserProfileContext);
  const [uploadAvatar] = useMutation<UploadAvatarResult, UploadAvatarInput>(
    UPLOAD_AVATAR,
    {
      refetchQueries: [
        { query: GET_ACCOUNT_INFO, variables: { id: user?.id } },
      ],
    },
  );

  const [isLoading, setIsLoading] = useState(false);
  const { setToastError } = useErrorToast();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    if (e.target.files && user?.id) {
      try {
        setIsLoading(true);
        const file = e.target.files[0];

        const base64 = await toBase64(file);

        console.log(user?.profile.id);

        await uploadAvatar({
          variables: {
            id: user?.profile.id,
            avatar: { size: file.size, type: file.type, base64 },
          },
        });

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setToastError("Something went wrong when uploading avatar");
      }
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <label htmlFor="avatar-upload">
      <input
        type="file"
        id="avatar-upload"
        hidden={true}
        onChange={handleChange}
        disabled={isLoading}
      />
      {user?.profile.avatar ? (
        <Avatar backgroundUrl={user?.profile.avatar} />
      ) : (
        <StyledAccountCircleIcon />
      )}
    </label>
  );
};

export default observer(AvatarSelector);
