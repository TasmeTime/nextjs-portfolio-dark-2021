import Project from "../../components/Content/project";

const project = {
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
  Tags: ["C#", "ReactJs", "Asp.Net MVC", "BootStrap"],
  Links: [{ Title: "GitHub", Url: "https://github.com/tasmetime" }],
};

const ProjectShowCase = () => {
  return <Project Project={project} />;
};
export default ProjectShowCase;
