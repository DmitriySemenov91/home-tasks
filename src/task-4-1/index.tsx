import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FullPost } from "./components/fullArticle";

export const ReactBlog = () => {
  const { pathname } = window.location;
  const idArticle = pathname.split("/")[2];
  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <Login />}
      {[pathname, "/post/"].includes("/post/") && <FullPost id={idArticle} />}
      <Footer />
    </>
  );
};
