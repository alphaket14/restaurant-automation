// hooks
import useAuth from "../hooks/useAuth";
//
import { MAvatar } from "./@material-extend";
import createAvatar from "../utils/createAvatar";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  const photoURL = "https://i.ibb.co/m9PJmg7/male-default-dp.png";
  const displayName = "User Photo";

  return (
    <MAvatar
      src={photoURL}
      alt={displayName}
      color={
        photoURL ? "default" : createAvatar(displayName && displayName).color
      }
      {...other}
    >
      {createAvatar(displayName).name}
    </MAvatar>
  );
}
