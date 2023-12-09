import { FC } from "react";
import Basket from "../../../assets/images/basket.jpeg";
import Baseball from "../../../assets/images/baseball.jpeg";
import Dumbell from "../../../assets/images/dumbell.jpeg";

import "./LandingHeaderImages.scss";

interface LandingHeaderImagesProps {
  isScrolled: boolean;
}

export const LandingHeaderImages: FC<LandingHeaderImagesProps> = ({
  isScrolled,
}) => (
  <div className="wrapper">
    <img src={Basket} alt="basketbal" className={"image"} />
    <img src={Dumbell} alt="dumbell" className={"image"} />
    <img src={Baseball} alt="baseball" className={"image"} />
  </div>
);
