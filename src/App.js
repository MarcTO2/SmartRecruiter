import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ASSESMENTPAGE from "./pages/ASSESMENTPAGE";
import HOMEPAGE from "./pages/HOMEPAGE";
import SIGNUPPAGE from "./pages/SIGNUPPAGE";
import SIGNINPAGE from "./pages/SIGNINPAGE";
import MAINLANDINGPAGE from "./pages/MAINLANDINGPAGE";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/main-landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ASSESMENTPAGE />} />
      <Route path="/home-page" element={<HOMEPAGE />} />
      <Route path="/sign-up-page" element={<SIGNUPPAGE />} />
      <Route path="/sign-in-page" element={<SIGNINPAGE />} />
      <Route path="/main-landing-page" element={<MAINLANDINGPAGE />} />
    </Routes>
  );
}
export default App;
