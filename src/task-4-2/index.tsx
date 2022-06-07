import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { NotFound } from "./pages/notFound";
import { Profile } from "./pages/profile";
import { Layout } from "./components/layout";

import { FullPost } from "./components/fullArticle";

export const ReactBlog = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index need for main sub route*/}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="post" element={<Home />} />
          <Route path="post/:id" element={<FullPost />} />
          {/* not found page*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
