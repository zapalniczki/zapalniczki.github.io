import { useMutation } from "react-query";
import getAuthorization from "api/getAuthorization";
import { Authorization } from "models/user";

export const useForm = () => {
  const {mutate} = useMutation<string, unknown, Authorization>(
    getAuthorization,
    {
      onError: () => {},
      onSuccess: (userId) => {
        // setIsAuthorized(true);
        // setUserId(userId);
      },
    }
  );


  const onSubmit =(values:Authorization) =>
};
