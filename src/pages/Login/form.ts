import { useMutation } from "react-query";
import getAuthorization from "api/getAuthorization";
import { Authorization } from "models/user";

export const useForm = (
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>,
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const { mutate, isSuccess } = useMutation<string, unknown, Authorization>(
    getAuthorization,
    {
      onSuccess: (userId) => {
        setIsAuthorized(true);
        setUserId(userId);
      },
      onError: (alfa, beta) => {},
    }
  );

  const onSubmit = (values: Authorization) => mutate(values);

  return {
    onSubmit,
    isSuccess,
  };
};
