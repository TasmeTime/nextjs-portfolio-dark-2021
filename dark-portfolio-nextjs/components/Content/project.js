import BadgeContainer from "../Badge/badgeContainer";
import SkillBadge from "../../components/Badge/skillBadge";
import Slider from "@farbenmeer/react-spring-slider";

const Project = (props) => {
  console.log(props.Project.Images);
  return (
    <div className="project">
      <div className="projectSlider">
        <Slider hasBullets>
          {props.Project.Images.map((img, i) => {
            console.log(img);
            console.log(img.Url);
            return (
              <img
                key={i}
                src={img.Url}
                alt={img.Alt}
                className="sliderImage"
              />
            );
          })}
        </Slider>
      </div>
      <h1 className="projectTitle">
        {props.Project.Title}
        <a href={props.Project.Url} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30.621 30.621"
          >
            <g
              id="Icon_feather-external-link"
              data-name="Icon feather-external-link"
              transform="translate(-3 -2.379)"
            >
              <path
                id="Path_8"
                data-name="Path 8"
                d="M27,19.5v9a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V12a3,3,0,0,1,3-3h9"
                fill="none"
                stroke="#ffd100"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M22.5,4.5h9v9"
                fill="none"
                stroke="#ffd100"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_10"
                data-name="Path 10"
                d="M15,21,31.5,4.5"
                fill="none"
                stroke="#ffd100"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </a>
      </h1>
      <p className="projectDes">{props.Project.Des}</p>
      <div className="projectTags">
        <h3>Tags</h3>
        <BadgeContainer>
          {props.Project.Tags.map((t, i) => {
            return <SkillBadge key={i}>{t}</SkillBadge>;
          })}
        </BadgeContainer>
      </div>
      <div className="projectLinks">
        {props.Project.Links.map((l, i) => {
          return (
            <a key={i} href={l.Url} target="_blank">
              {l.Title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
