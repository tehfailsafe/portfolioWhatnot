import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PageWrapper } from "~/components/PageWrapper";
import { Headline1, Headline2 } from "~/components/Typography";
import image1 from "../images/nft/1.png";
import image2 from "../images/nft/2.png";
import image3 from "../images/nft/3.png";
import image4 from "../images/nft/4.png";
import image5 from "../images/nft/5.png";
import image6 from "../images/nft/6.png";
import image7 from "../images/nft/7.png";
import image8 from "../images/nft/8.png";
import image9 from "../images/nft/9.png";
import image10 from "../images/nft/10.png";
import image11 from "../images/nft/11.png";
import image12 from "../images/nft/12.png";
import image13 from "../images/nft/13.png";
import image14 from "../images/nft/14.png";
import image15 from "../images/nft/15.png";
import image16 from "../images/nft/16.png";
import image17 from "../images/nft/17.png";

export default function Collector() {
  return (
    <PageWrapper>
      <Headline1 className="mt-24">My digital art</Headline1>
      <Masonry columnsCount={3} gutter="16px" className="mt-8">
        <img src={image1} alt="digital art" />
        <img src={image11} alt="digital art" />
        <img src={image9} alt="digital art" />
        <img src={image10} alt="digital art" />
        <img src={image4} alt="digital art" />
        <img src={image3} alt="digital art" />
        <img src={image5} alt="digital art" />
        <img src={image6} alt="digital art" />
        <img src={image7} alt="digital art" />
        <img src={image8} alt="digital art" />
        <img src={image12} alt="digital art" />
        <img src={image13} alt="digital art" />
        <img src={image14} alt="digital art" />
        <img src={image2} alt="digital art" />
        <img src={image15} alt="digital art" />
        <img src={image16} alt="digital art" />
        <img src={image17} alt="digital art" />
      </Masonry>
    </PageWrapper>
  );
}
