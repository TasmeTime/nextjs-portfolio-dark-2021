import Link from "next/link";
const LeftSection = (props) => {
  function startsWith(str, word) {
    return str.lastIndexOf(word, 0) === 0;
  }
  const pn = props.pathName;

  return (
    <section className="leftSection">
      <div className="info">
        <img src="./portrait.png" alt="avatar" className="avatar" />
        <h1>Moslem Azad</h1>
        <p>Full-Stack Web Developer</p>
      </div>
      <nav className="nav">
        <Link href="/about-me">
          <a
            href="/about-me"
            className={
              "navItem" + (startsWith(pn, "/about-me") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 18.58 18.58"
            >
              <path
                id="Icon_material-person-outline"
                data-name="Icon material-person-outline"
                d="M15.29,8.206a2.439,2.439,0,1,1-2.439,2.439A2.438,2.438,0,0,1,15.29,8.206m0,10.451c3.449,0,7.084,1.7,7.084,2.439v1.277H8.206V21.1c0-.743,3.635-2.439,7.084-2.439M15.29,6a4.645,4.645,0,1,0,4.645,4.645A4.644,4.644,0,0,0,15.29,6Zm0,10.451C12.19,16.451,6,18.007,6,21.1V24.58H24.58V21.1C24.58,18.007,18.391,16.451,15.29,16.451Z"
                transform="translate(-6 -6)"
                fill="#232323"
              />
            </svg>
            About Me
          </a>
        </Link>
        <Link href="/my-projects">
          <a
            href="/my-projects"
            className={
              "navItem" + (startsWith(pn, "/my-projects") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15.6"
              viewBox="0 0 22 17.6"
            >
              <path
                id="Icon_material-folder-open"
                data-name="Icon material-folder-open"
                d="M22.8,8.2H14L11.8,6H5.2A2.2,2.2,0,0,0,3.011,8.2L3,21.4a2.206,2.206,0,0,0,2.2,2.2H22.8A2.206,2.206,0,0,0,25,21.4v-11A2.206,2.206,0,0,0,22.8,8.2Zm0,13.2H5.2v-11H22.8Z"
                transform="translate(-3 -6)"
                fill="#232323"
              />
            </svg>
            My Projects
          </a>
        </Link>
        <Link href="/contact-me">
          <a
            href="/contact-me"
            className={
              "navItem" + (startsWith(pn, "/contact-me") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 22 22"
            >
              <path
                id="Icon_feather-message-square"
                data-name="Icon feather-message-square"
                d="M24.5,17.833a2.222,2.222,0,0,1-2.222,2.222H8.944L4.5,24.5V6.722A2.222,2.222,0,0,1,6.722,4.5H22.278A2.222,2.222,0,0,1,24.5,6.722Z"
                transform="translate(-3.5 -3.5)"
                fill="none"
                stroke="#232323"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
            Contact Me
          </a>
        </Link>
      </nav>
      <nav className="m-nav">
        <Link href="/about-me">
          <a
            href="/about-me"
            className={
              "m-navItem" + (startsWith(pn, "/about-me") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 18.58 18.58"
            >
              <path
                id="Icon_material-person-outline"
                data-name="Icon material-person-outline"
                d="M15.29,8.206a2.439,2.439,0,1,1-2.439,2.439A2.438,2.438,0,0,1,15.29,8.206m0,10.451c3.449,0,7.084,1.7,7.084,2.439v1.277H8.206V21.1c0-.743,3.635-2.439,7.084-2.439M15.29,6a4.645,4.645,0,1,0,4.645,4.645A4.644,4.644,0,0,0,15.29,6Zm0,10.451C12.19,16.451,6,18.007,6,21.1V24.58H24.58V21.1C24.58,18.007,18.391,16.451,15.29,16.451Z"
                transform="translate(-6 -6)"
                fill="#232323"
              />
            </svg>
          </a>
        </Link>
        <Link href="/my-projects">
          <a
            href="/my-projects"
            className={
              "m-navItem" + (startsWith(pn, "/my-projects") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15.6"
              viewBox="0 0 22 17.6"
            >
              <path
                id="Icon_material-folder-open"
                data-name="Icon material-folder-open"
                d="M22.8,8.2H14L11.8,6H5.2A2.2,2.2,0,0,0,3.011,8.2L3,21.4a2.206,2.206,0,0,0,2.2,2.2H22.8A2.206,2.206,0,0,0,25,21.4v-11A2.206,2.206,0,0,0,22.8,8.2Zm0,13.2H5.2v-11H22.8Z"
                transform="translate(-3 -6)"
                fill="#232323"
              />
            </svg>
          </a>
        </Link>
        <Link href="/contact-me">
          <a
            href="/contact-me"
            className={
              "m-navItem" + (startsWith(pn, "/contact-me") ? " active" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 22 22"
            >
              <path
                id="Icon_feather-message-square"
                data-name="Icon feather-message-square"
                d="M24.5,17.833a2.222,2.222,0,0,1-2.222,2.222H8.944L4.5,24.5V6.722A2.222,2.222,0,0,1,6.722,4.5H22.278A2.222,2.222,0,0,1,24.5,6.722Z"
                transform="translate(-3.5 -3.5)"
                fill="none"
                stroke="#232323"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </a>
        </Link>
      </nav>
    </section>
  );
};

export default LeftSection;
