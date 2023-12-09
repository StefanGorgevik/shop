import { FC, useRef } from "react";

import DumbellWide from "../../../assets/images/wideequip/dumbels-wide.jpeg";
import GymWide from "../../../assets/images/wideequip/gym-wide.jpeg";
import ShoesWide from "../../../assets/images/wideequip/shoes-wide.jpeg";

import "./LandingStackImages.scss";

export const LandingStackImages: FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const handleImageHover = () => {
    if (imagesRef.current) {
      imagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    <div className="images">
      <div ref={imagesRef}>
        <img
          src={DumbellWide}
          alt="dumbell"
          className="big-image"
          onMouseOver={handleImageHover}
        />
      </div>
      <img src={GymWide} alt="gym" className="big-image" />
      <img src={ShoesWide} alt="shoes" className="big-image" />
    </div>
  );
};
