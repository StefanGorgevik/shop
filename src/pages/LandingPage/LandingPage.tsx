import { FC, useEffect, useState } from "react";

import "./LandingPage.scss";
import { LandingStackImages } from "../../components/landing-page/LangindStackImages/LandingStackImages";
import { LandingHeaderImages } from "../../components/landing-page/LandingHeaderImages/LandingHeaderImages";
import { LandingText } from "../../components/landing-page/LandingText/LandingText";
import { LandingAuth } from "../../components/landing-page/LandingAuth/LandingAuth";

export const LandingPage: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <LandingHeaderImages isScrolled={isScrolled} />
      <LandingText isScrolled={isScrolled} />
      <LandingStackImages />
      <LandingAuth />
    </div>
  );
};
