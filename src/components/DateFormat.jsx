import { format } from "@formkit/tempo";

export const DateFormat = (date) => {
  return (
    <p>
      {format(date, "YYYY.MM.DD")}
    </p>
  )
};
