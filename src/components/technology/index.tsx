import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import "./testimonials.scss";

export default function Techonologies() {
  const data = [
    {
      id: 1,
      skill: "Back-End",
      img:
      <DiFirebase size="8rem"/>,
      desc:
        "Experience with Strapi and Firebase",
    },
    {
      id: 2,
      skill: "Front-End",
      img:
      <DiReact size="8rem"/>,
      desc:
        " Experiece with React.js/ts,NextJS and React-Native ",
      featured: true,
    },
    {
      id: 3,
      skill: "UI/UX",
      img:
      <DiZend size="8rem"/>,
      desc:
        " Minimal Experience with Figma",
    },
  ];
  return (
    <div className="techonologies" id="technologies">
      <SectionTitle>Technologies</SectionTitle>
      <SectionDivider/>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
                {d.img}
            </div>
            <div className="bottom">
              <h3>{d.skill}</h3>
            </div>
            <div className="center">
              {d.desc}
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}
