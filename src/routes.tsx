import { Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout children={<HomePage />} />} />
    </Routes>
  );
};

export default AppRoutes;
