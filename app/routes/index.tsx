import * as React from "react";
import { Grid } from "~/components/Grid";
import { Icon } from "~/components/Icon";
import { Headline1, Headline2, Body, Body2 } from "~/components/Typography";

export default function Index() {
  const [showGrid, setShowGrid] = React.useState(false);
  return (
    <>
      {showGrid && <Grid />}
      <div className="flex flex-col items-center p-6 z-10 relative">
        <div className="container flex justify-between w-full">
          <Body2>Mike Johnson</Body2>
          <div className="flex gap-4">
            <Icon>favorite</Icon>
            <Body2>Twitter</Body2>
            <Body2 onClick={() => setShowGrid(!showGrid)}>Grid</Body2>
          </div>
        </div>
        <div className="container mt-24">
          <Headline1>Hello!</Headline1>
          <Body className="text-low">
            I am a designer with a passion for motion design, prototyping, and design systems.
          </Body>
        </div>
        <div className="container mt-12">
          <Body2 className="text-low">I am also a</Body2>
          <Headline2>Collector.</Headline2>
          <Headline2>Comic book shop owner.</Headline2>
          <Headline2>Team Manager.</Headline2>
          <Headline2>Whatnot Seller.</Headline2>
          <Headline2>NFT Artist.</Headline2>
        </div>
      </div>
    </>
  );
}
