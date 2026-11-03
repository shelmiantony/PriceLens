import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SearchResultPage from "../pages/SearchResultpage";
import ProductDetailPage from "../pages/ProductDetailsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/search/:productName" element={<ProductDetailPage />} />
    </Routes>
  );
};
export default AppRoutes;
