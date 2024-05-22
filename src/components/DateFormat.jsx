import { format } from "@formkit/tempo";

export const DateFormat = (props) => {
  const { date } = props;
  return <>{format(date, "YYYY.MM.DD")}</>;
};
