import Link from "next/link";
import BadgeContainer from "../Badge/badgeContainer";
import ProjectCardBadge from "../Badge/projectCardBadge";

const ProjectCard = (props) => {
  return (
    <Link href={"/my-projects/" + props.Project.Id}>
      <div className="projectCard">
        <img
          src={props.Project.Images[0].Url}
          alt={props.Project.Images[0].Alt}
          className="porjectCardImage"
        />
        <div className="cardBody">
          <div className="projectDetail">
            <h2 className="projectCardTitle">{props.Project.Title}</h2>
            <BadgeContainer>
              {props.Project.Tags.map((t, i) => {
                return <ProjectCardBadge key={i}>{t}</ProjectCardBadge>;
              })}
            </BadgeContainer>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
