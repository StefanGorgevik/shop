import { FC } from "react";

import "./LandingText.scss";
import classNames from "classnames";

interface LandingTextProps {
  isScrolled: boolean;
}

export const LandingText: FC<LandingTextProps> = ({ isScrolled }) => (
  <div
    className={classNames(
      "text",
      isScrolled ? "text-Scrolled" : "text-notScrolled"
    )}
  >
    <h1>Lorem ipsum dolor sit amet</h1>
    <h4 style={{ textTransform: "uppercase" }}>
      Aenean consectetur sodales magna, nec facilisis dui condimentum non
    </h4>
    <p>
      Aenean consectetur sodales magna, nec facilisis dui condimentum nonAenean
      consectetur sodales magna, nec facilisis dui condimentum nonAenean
      consectetur sodales magna, nec facilisis dui condimentum nonAenean
      consectetur sodales magna, nec facilisis dui condimentum nonAenean
      consectetur sodales magna, nec facilisis dui condimentum
    </p>
  </div>
);
