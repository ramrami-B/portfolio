import { Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutme" element={<PageLayout children={<AboutMePage />} />} />
    </Routes>
  );
};

export default AppRoutes;
