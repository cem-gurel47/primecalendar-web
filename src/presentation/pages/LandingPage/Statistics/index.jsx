import { SectionStyles, Image, Title, Description } from "../styles";
import { Container, Column } from "../../../components/Grid/styles";
import StatisticsImage from "../../../../assets/LandingPage/statistics.svg";

const Statistics = () => (
  <SectionStyles colorful>
    <Container>
      <Column xs={24} md={12} data-aos="zoom-in-right" data-aos-duration="1000">
        <Title weight="bold" color="white">
          Advanced Statistics
        </Title>
        <Description color="white" size="noble-regular">
          See how much time you spend on specific activities and get monthly
          comparisons.
        </Description>
      </Column>
      <Column xs={24} md={12} data-aos="zoom-in-left" data-aos-duration="1000">
        <Image src={StatisticsImage} alt="statictics-image" />
      </Column>
    </Container>
  </SectionStyles>
);

export default Statistics;
