import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PageWrapper } from "~/components/PageWrapper";
import { Headline1, Headline2 } from "~/components/Typography";
import image01 from "../images/collector/01.jpg";
import image01 from "../images/collector/01.jpg";

export default function Collector() {
  return (
    <PageWrapper>
      <Headline1 className="mt-24">My collection</Headline1>
      <Masonry>
        <img src={image1} />
        <img src={image4} />
        <img src={image2} />
        <img src={image3} />
        <img src={image5} />
        <img src={image6} />
        <img src={image7} />
        <img src={image8} />
        <img src={image9} />
        <img src={image10} />
        <img src={image11} />
        <img src={image12} />
        <img src={image13} />
        <img src={image14} />
        <img src={image15} />
        <img src={image16} />
        <img src={image17} />
      </Masonry>
    </PageWrapper>
  );
}
