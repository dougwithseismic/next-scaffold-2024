import { formatDistanceStrict } from "date-fns";

const formatRelativeTimeDate = (date: Date) => {
  const distance = formatDistanceStrict(date, new Date(), { addSuffix: false });
  const [value, unit] = distance.split(" ");
  const unitFirstLetter = unit.substring(0, 1).toLowerCase();
  return `${value}${unitFirstLetter}`;
};


export default formatRelativeTimeDate;
