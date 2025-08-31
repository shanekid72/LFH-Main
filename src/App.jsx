import { useEffect } from "react";
import { useWow } from "./hooks/useWow";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { useSidebar } from "./hooks/useSidebar";
import { usePureCounter } from "./hooks/usePureCounter";
import { HomeTwo } from "./pages/home/HomeTwo";
import { About } from "./pages/about/About";
import { Team } from "./pages/team/Team";
import { Faq } from "./pages/faq/Faq";
import { Blog } from "./pages/blog/Blog";
import { BlogDetails } from "./pages/blog/BlogDetails";
import { Service } from "./pages/service/Service";
import { ServiceDetails } from "./pages/service/ServiceDetails";
import { Contact } from "./pages/contact/Contact";

function App() {
  useWow();
  useMobileMenu();
  useSidebar();
  usePureCounter();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
