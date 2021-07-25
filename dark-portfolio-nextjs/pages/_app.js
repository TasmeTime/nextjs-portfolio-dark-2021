import "../styles/globals.css";
import { useRouter } from "next/router";
import RightSection from "../components/Content/rightSection";
import LeftSection from "../components/Menu/leftSection";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;
  //console.log(router.query);
  console.log(router);
  return (
    <div className="root">
      <div className="container">
        <LeftSection pathName={pathName} />
        <RightSection>
          <Component {...pageProps} />
        </RightSection>
      </div>
    </div>
  );
}

export default MyApp;
