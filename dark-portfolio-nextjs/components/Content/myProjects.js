import ProjectCard from "./projectCard";

const projects = [
  {
    Id: "1",
    Images: [
      {
        Url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        Alt: "Project Image",
      },
    ],
    Url: "https://m-azad.ir",
    Title: "AkSeller.ir",
    Des: "SOME DES",
    Tags: ["C#", "ReactJs"],
    Links: [{ Title: "GitHub", Url: "https://github.com/tasmetime" }],
  },
  {
    Id: "2",
    Images: [
      {
        Url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        Alt: "Project Image",
      },
    ],
    Url: "https://m-azad.ir",
    Title: "AkSeller.ir",
    Des: "SOME DES",
    Tags: ["C#", "ReactJs"],
    Links: [{ Title: "GitHub", Url: "https://github.com/tasmetime" }],
  },
];

const MyProjects = () => {
  return (
    <div className="myProjects">
      {projects.map((p) => {
        return <ProjectCard key={p.Id} Project={p} />;
      })}
    </div>
  );
};
export default MyProjects;
