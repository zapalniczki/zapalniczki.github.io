import editUser from "api/users/editUser";
import { User } from "models/user";
import { useMutation } from "react-query";
import { View } from "./EditForm";

export const useForm = (
  setEditingForm: React.Dispatch<React.SetStateAction<boolean>>,
  setView: React.Dispatch<React.SetStateAction<View>>
) => {
  const { mutate } = useMutation<unknown, unknown, User>(editUser, {
    onSuccess: () => {
      setEditingForm(false);
      setView("success");
    },
  });

  const onSubmit = (values: User) => mutate(values);

  const initialValues = (user: User) => user;

  return {
    onSubmit,
    initialValues,
  };
};

export type FormValues = User;
