import { Project } from "~/components/ProjectThumb";
import comicPriceCheck from "../images/thumbs/comicpricecheck.jpg";

export default function Index() {
  return (
    <main className="flex flex-col">
      <div className="p-8 bg-gradient-to-br from-indigo-700 to-blue-500 h-40 lg:h-96 flex flex-col justify-center">
        <h1 className="text-5xl text-white font-bold">Hello.</h1>
        <h2 className="text-2xl text-white font-semibold">
          My name is Mike Johnson
        </h2>
        <div className="text-lg text-white mt-4">
          I am a product designer with love for motion, design systems, and
          engineering.
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4">
        <Project
          title="Comic Pricecheck"
          thumbnail={comicPriceCheck}
          href="comic-price-check"
        ></Project>
      </div>
    </main>
  );
}
