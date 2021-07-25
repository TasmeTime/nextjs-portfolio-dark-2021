const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeCart">
        <h3 className="cardTitle">Bio</h3>
        <div className="cardBody">
          <div className="m-info">
            <img src="./portrait.png" alt="avatar" className="avatar" />
            <h1>Moslem Azad</h1>
            <p>Full-Stack Web Developer</p>
          </div>
          Hello there! (Obi-Wan Style) , I'm Shahin and I have been working
          around with the computers since I was 12! I started growing a passion
          for programming stuff at 15 and decided to spend -almost- all of my
          time learning how to code. past that, I'm a full-stack web/client-side
          app developer who could help you with almost anything related to apps,
          computer stuff, and of course programming. I know my way well around:
          C#, NodeJs, ReactJs, NextJs, HTML, CSS, PHP familiar with: MongoDB,
          WordPress, Adobe Xd, Python, Java, Pentest concepts, and a lot more.
          and had some experiences with Arduino, Linux, IOT
        </div>
      </div>
      <div className="aboutMeCart">
        <h3 className="cardTitle">Skills</h3>
        <div className="cardBody">
          <div className="badgeContainer">
            <span className="skillBadge">C#</span>
            <span className="skillBadge">C#</span>
            <span className="skillBadge">C#</span>
            <span className="skillBadge">C#</span>
          </div>
        </div>
      </div>
      <div className="aboutMeCart">
        <h3 className="cardTitle">Worked With</h3>
        <div className="cardBody">
          <div className="badgeContainer">
            <span className="wwBadge">C#</span>
            <span className="wwBadge">C#</span>
            <span className="wwBadge">C#</span>
            <span className="wwBadge">C#</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
