import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { NotFound } from "./pages/notFound";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FullPost } from "./components/fullArticle";

export const ReactBlog = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Home />} />
        <Route path="/post/:id" element={<FullPost />} />
        // not found page
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
