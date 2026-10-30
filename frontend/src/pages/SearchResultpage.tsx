import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
const SearchResultPage = () => {
  const { state } = useLocation();
  const isSearch: boolean = state?.isSearch ?? false;
  const query: string = state?.query ?? "";
  return (
    <Box>
      {" "}
      <Header isSearch={isSearch} query={query} />
    </Box>
  );
};

export default SearchResultPage;
