import { parseISO, formatDistanceToNow } from "date-fns";

const TimePosted = ({ timestamp }) => {
  let timePosted = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timePosted = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      <i>{timePosted}</i>
    </span>
  );
};
export default TimePosted;
