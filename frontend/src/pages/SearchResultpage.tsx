import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import { useState } from "react";
const SearchResultPage = () => {
  const { state } = useLocation();
  const isSearch: boolean = state?.isSearch ?? false;
  const query: string = state?.query ?? "";
  const [sortBy, setSortBy] = useState("price-low-high");
  return (
    <Box>
      {" "}
      <Header isSearch={isSearch} query={query} />
      <Box
        sx={{
          width: "100%",
          maxWidth: 1360,
          minHeight: "calc(100vh-90px)",
          mx: "auto",
          bgcolor: "#f7f7f9",
          border: "1px solid #dedee3",
          borderTop: 0,
          boxSizing: "border-box",
          px: { xs: 2.5, sm: 5, md: 9 },
          pt: { xs: 3, sm: 3.5 },
        }}
      >
        <Typography
          component="p"
          sx={{ color: "#5f5c6c", fontSize: 14, mb: 1.1 }}
        >
          {" "}
          Home / Search
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                color: "#191923",
                lineHeight: 1.1,
                fontWeight: 700,
                letterSpacing: "-1px",
                mb: 0.5,
                fontSize: { xs: 28, sm: 34 },
              }}
            >
              {" "}
              Results for &quot;{query}&quot;
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#686574", fontSize: 15, m: 0 }}
            >
              {" "}
              6 products across 4 stores. Sample data for design only.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography
              component="label"
              htmlFor="sort-products"
              sx={{ color: "#5f5c6c", fontSize: 14 }}
            >
              {" "}
              Sort by
            </Typography>
            <FormControl sx={{ minWidth: 180 }}>
              <Select value={sortBy}>
                <MenuItem></MenuItem>
                <MenuItem value="price-low-high">Price: Low to High</MenuItem>
                <MenuItem value="price-high-low">Price: High to Low</MenuItem>
                <MenuItem value="name">Name</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResultPage;
