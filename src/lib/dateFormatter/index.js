import { format } from "@formkit/tempo";

export const formatYYYYMMDD = (date) => {
  return format(date, "YYYY.MM.DD")
}
