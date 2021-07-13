import { format } from "date-fns";

const getNow = () => {
  return format(new Date(), databaseTimeFormat);
};

export default getNow;

export const databaseTimeFormat = "yyyy-MM-dd HH:mm:ssX";
