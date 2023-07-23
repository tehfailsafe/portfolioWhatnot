import * as React from "react";
import { Grid } from "~/components/Grid";
import { Icon } from "~/components/Icon";
import { PageWrapper } from "~/components/PageWrapper";
import { Headline1, Headline2, Body, Body2 } from "~/components/Typography";
import { TextLink } from "~/components/Typography/TextLink";

export default function Index() {
  const [showGrid, setShowGrid] = React.useState(false);
  return (
    <>
      {showGrid && <Grid />}
      <PageWrapper>
        <div className="flex justify-between w-full">
          <Body2>Mike Johnson</Body2>
          <div className="flex gap-4">
            <Icon>favorite</Icon>
            <Body2>Twitter</Body2>
            <Body2 onClick={() => setShowGrid(!showGrid)}>Grid</Body2>
          </div>
        </div>
        <div className="mt-24">
          <Headline1>Hello!</Headline1>
          <Body className="text-low">
            I am a designer with a passion for motion design, prototyping, and design systems.
          </Body>
        </div>
        <div className="mt-12">
          <Body2 className="text-low">I am also a</Body2>

          <Headline2 to="/collector">Collector.</Headline2>
          <Headline2 to="/">Comic book shop owner.</Headline2>
          <Headline2 to="/">Team Manager.</Headline2>
          <Headline2 to="/">Whatnot Seller.</Headline2>
          <Headline2 to="/artist">NFT Artist.</Headline2>
        </div>
        <div className="mt-24">
          <Body2 className="text-low">Selected case studies</Body2>
          <Headline1 to="/">Google Duo</Headline1>
          <Headline1 to="/">Comic Price Check</Headline1>
          <Headline1 to="/">Kaggle design system</Headline1>
          <Headline1 to="/">Whatnot chrome extension</Headline1>
        </div>
      </PageWrapper>
    </>
  );
}
