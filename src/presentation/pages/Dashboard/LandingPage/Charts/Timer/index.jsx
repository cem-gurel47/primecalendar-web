import TimerStyles from "../Progress/styles";
import { Text } from "../../../../../components/Typography/styles";
import { useState, useEffect } from "react";
import TimerIcon from "../../../../../../assets/Layout/timer.svg";
import moment from "moment";

const Timer = ({ finishDate }) => {
  const [secondsRemained, setSecondsRemained] = useState(
    finishDate.diff(moment()) / 1000
  );
  const hours = Math.floor(secondsRemained / 3600); //convert seconds to hours
  const minutes = Math.floor((secondsRemained % 3600) / 60); //convert seconds to minutes
  const seconds = Math.floor(secondsRemained - (3600 * hours + 60 * minutes));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsRemained > 0) {
        setSecondsRemained(secondsRemained - 1);
      }
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <TimerStyles style={{ marginTop: "15px", alignItems: "flex-start" }}>
      <Text color="grey">Next event in:</Text>
      <Text
        color="#C2B3C4"
        weight="semi-bold"
      >{`${hours}:${minutes}:${seconds}`}</Text>
    </TimerStyles>
  );
};

export default Timer;