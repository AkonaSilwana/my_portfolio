import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import PortfolioImage from '../../assets/porftolioImages/profile-placeholder.png'

export default function Intro() {
  const textRef: any = useRef(); //TODO: replace any here

  useEffect(() => {
    init(textRef?.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React Developer",
        "React Native Developer",
        "NextJS Developer"
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={PortfolioImage} alt={"Placeholder"} width={'auto'} />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Akona Silwana</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  );
}
