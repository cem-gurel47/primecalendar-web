import EventStyles, { Text, Title, Img } from "./styles";
import { Container } from "../../../../../components/Grid/styles";
import BookImage from "../../../../../../assets/Layout/book.svg";
import LeisureImage from "../../../../../../assets/Layout/leisure.svg";
import SportsImage from "../../../../../../assets/Layout/gym.svg";
import StudyImage from "../../../../../../assets/Layout/studying.svg";
import SocialImage from "../../../../../../assets/Layout/social.svg";

const Event = ({ status, type, activity }) => {
  const texts = {
    1: "Previous Event",
    2: "Current Event",
    3: "Next Event",
  };

  const images = {
    1: BookImage,
    2: LeisureImage,
    3: SportsImage,
    4: StudyImage,
    5: SocialImage,
  };

  return (
    <EventStyles align="flex-start">
      <Title color="grey">{texts[status]}:</Title>
      <Container>
        <Img src={images[type]} alt="type" />
        <Text weight="semi-bold" size="title" color="white">
          {activity}
        </Text>
      </Container>
    </EventStyles>
  );
};

export default Event;
