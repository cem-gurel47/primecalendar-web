import ProgressStyles, { ProgressBar, Img } from "./styles";
import { Column } from "../../../../../components/Grid/styles";
import { Text } from "../../../../../components/Typography/styles";
import DoneIcon from "../../../../../../assets/Layout/done.svg";

const Progress = ({ value }) => {
  return (
    <ProgressStyles>
      <ProgressBar value={value} variant="determinate" />
      <Img src={DoneIcon} alt="progress" />
      <Column align="start">
        <Text size="title" color="blue" weight="semi-bold">
          {value}%
        </Text>
        <Text color="grey">Tasks done</Text>
      </Column>
    </ProgressStyles>
  );
};

export default Progress;
