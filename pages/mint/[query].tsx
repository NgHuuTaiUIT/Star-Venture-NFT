import { useRouter } from "next/router";
import PrivateDay from "../../components/Mint/PrivateDays";
import WhiteList from "../../components/Mint/WhiteList";
import Section from "../../components/Section/Section";

const Page = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Section styles={{ mt: "3rem" }}>
      {/* {route === "/mint/private-day" ? <PrivateDay /> : null} */}
      {/* {route === "/mint/white-list" ? <WhiteList /> : null} */}
    </Section>
  );
};

export default PrivateDay;
