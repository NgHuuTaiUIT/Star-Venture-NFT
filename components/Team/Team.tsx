/** @jsxImportSource theme-ui */

import React, { useContext } from "react";
import { Box, Flex, Grid, Link } from "theme-ui";
import { ModalContext } from "../../context/ModalProvider";
import Section from "../Section/Section";
import Title from "../Title/Title";
import {
  btnStyle,
  containerTeamStyle,
  gridTeamStyle,
  imageStyle,
  InfoStyle,
  nameCardBoxHoverStyle,
  nameCardBoxStyle
} from "./style";
import { useSpring, animated as a, config } from "react-spring";
import { ScrollToSectionContext } from "../../context/ScrollToSectionProvider";
import Image from "next/image";
import { LinearBackground } from "../LinearBackground/LinearBackground";

const data = [
  {
    image: "/assets/images/larry-nguyen.webp",
    name: "Larry Nguyen",
    position: "CEO",
    content: `Larry has spent the last decade making games, high-digital productions in gaming and ad fields in big corps, including FPT, VCCORP and VNG.
    \n
    Currently, he is in the position of Chief of Creative Technology Officer and managing the lab at Bread n’ Tea of 20+ head-counts.
    \nOver the past few years, he’s deeply learned in Human-Computer Interaction (HCI) technologies, AR, VR, computer vision and has experienced hardware implementation of these technologies into usability in recent projects.
    \nStar Venture is his next step in proving noble techs in life. 
    \nFor him, pixels and codes are life!
    .`
  },
  {
    image: "/assets/images/ethan-dang.webp",
    name: "Ethan Dang",
    position: "CTO",
    content: `Ethan is a veteran software engineer and entrepreneur who has 10+ years experience working in the field for famous Tech companies such as VNG, Garena, Shopee, Viettel, ZenDesk... to name a few. Ethan founded and act as CTO for Turbudd, a digital travel platform and Vừa Đủ, a cross-platform software consulting company.
    \nThrough years of working and self-learning, Ethan has developed several skillset in mobile/web app development, system design - design pattern, object oriented design.
    \nWith a strong background proven by many projects and national awards, Ethan is the mind behind Star Venture’s technologies.
    `
  },
  {
    image: "/assets/images/choz-vu.webp",
    name: "Choz Vu",
    position: "CMO",
    content: `Choz Vu is a successful entrepreneur of many projects, with over 10 years of experience in the e-commerce industry, working in the field for famous companies such as VCCorp, Cen Group, eDoctor, EWAY, AdFlex ...
    \nHe’s the founder & CMO of many e-commerce companies such as Greenphar - AdSpace.
    \nHe has strengths in process optimization, has a lot of experience in developing market users through social networks.
    `
  },
  {
    image: "/assets/images/bach-zip.webp",
    name: "Bách Zim",
    position: "Art Director",
    content: `Former Zitga Studio Lead artist. Bách is experienced in Sci-fi & Fantasy game artworks and concepts. Used to be the mind behind many art concepts that millions loved from Garena - Arena of Valor and Mobile Legend Bang Bang.`
  }
];

const Team = ({ compRef }: { compRef: React.RefObject<HTMLElement> }) => {
  const { showTeam } = useContext(ScrollToSectionContext);

  const teamSpringProps = useSpring({
    opacity: showTeam ? 1 : -2,
    config: config.molasses
  });

  return (
    <section ref={compRef}>
      <Section
        styles={{
          mt: "5rem",
          position: "relative",
          maxWidth: ["100vw !important"]
        }}>
        <LinearBackground
          top={"-45%"}
          style={{
            width: "100%",
            height: "1158px",
            zIndex: -1,
            display: ["block", , , "none"]
          }}
          rotation={-180}
        />
        <LinearBackground
          bottom={-100}
          style={{
            width: "100%",
            height: "800px",
            zIndex: -1,
            display: ["block", , , "none"]
          }}
          rotation={0}
        />
        <Flex as="section" sx={containerTeamStyle}>
          <Box
            sx={{
              mt: [30, , 10]
            }}>
            <Title title="Team" letterSpacing={[10, 10]} fontSize={[36, 48]} />
          </Box>
          <a.div style={teamSpringProps}>
            <Grid columns={[1, null, null, 4]} sx={gridTeamStyle}>
              {data.map(vl => (
                <NameCard {...vl} key={vl.name} />
              ))}
            </Grid>
          </a.div>
        </Flex>
      </Section>
    </section>
  );
};

const NameCard: React.FC<{
  name: string;
  position: string;
  image: string;
  content: string;
}> = ({ name, position, image, content }) => {
  const { setModalContent, openModal } = useContext(ModalContext);

  const setDataModal = () => {
    setModalContent({
      name,
      position,
      image,
      content
    });
    openModal();
  };

  return (
    <Box
      sx={{
        minHeight: [260]
      }}>
      <Flex sx={nameCardBoxStyle}>
        <Box sx={{ position: "relative" }}>
          <Image
            src={image}
            alt="team"
            sx={imageStyle}
            width={140}
            height={140}
          />
          <Flex id="member-detail" sx={nameCardBoxHoverStyle}>
            <Link as="a" sx={btnStyle} onClick={setDataModal}>
              VIEW DETAIL
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Info name={name} position={position} />
    </Box>
  );
};

const Info = ({ name, position }: { name: string; position: string }) => (
  <Flex sx={InfoStyle}>
    <Box as="p">{name}</Box>
    <Box as="p" sx={{ color: "secondary", fontSize: "smaller" }}>
      {position}
    </Box>
  </Flex>
);
export default Team;
