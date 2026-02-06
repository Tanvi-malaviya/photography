import { BehindProcess } from "../../../components/portfolio/BehindProcess";

import FeaturedProject from "../../../components/portfolio/FeaturedProject";
import FloatingGallery from "../../../components/portfolio/FloatingGallery";
import PortfolioHeroEmotion from "../../../components/portfolio/PortfolioHeroEmotion";
import { PortfolioStats } from "../../../components/portfolio/PortfolioStats";
import { CinematicStatement, SwissStatement } from "../../../components/portfolio/SwissStatement";
import { EditorialCinematicCTA } from "../../../components/portfolio/UltraCinematicCTA";



export default function Portfolio() {
  return (
    <>
    <PortfolioHeroEmotion />
    <FeaturedProject />
    <FloatingGallery />
   
    <BehindProcess />
    <PortfolioStats />
    {/* <CinematicStatement /> */}
    <EditorialCinematicCTA />


    </>
  );
}
