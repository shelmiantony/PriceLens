import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import ProductInfo from "../components/ProductInfo";
const SearchResultPage = () => {
  const { state } = useLocation();
  const isSearch: boolean = state?.isSearch ?? false;
  const query: string = state?.query ?? "";
  const [sortBy, setSortBy] = useState("price-low-high");
  const stores = ["Nykaa", "Purple", "Amazon", "Myntra"];
  const priceRanges = [
    { value: "any", label: "Any price" },
    { value: "under-150", label: "Under ₹150" },
    { value: "150-250", label: "₹150 to ₹250" },
    { value: "above-250", label: "Above ₹250" },
  ];
  const brands = ["Auralé", "Lumera", "Kohl & Co", "Bold Muse"];
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
      {/* store selection */}
      <Box
        sx={{
          display: "grid",
          gridTemplate: { xs: "1fr", md: "280px minmax(0,1fr)" },
          gap: { xs: 2.5, md: 4 },
          mt: { xs: 3, sm: 4 },
          pb: 5,
          alignItems: "start",
        }}
      >
        <Box
          component="aside"
          aria-label="Product filters"
          sx={{
            bgcolor: "#fff",
            border: "1px solid #e1dfe8",
            borderRadius: "16px",
            p: { xs: 2.5, sm: 3 },
            color: "#191923",
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1.25 }}>
            Stores
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
            {" "}
            {stores.map((store) => (
              <FormControlLabel
                key={store}
                label={store}
                sx={{
                  m: 0,
                  minHeight: 38,
                  "& .MuiFormControlLabel-label": { fontSize: 15 },
                }}
                control={
                  <CheckBox
                    size="small"
                    checked={true}
                    sx={{
                      color: "#92909a",
                      "&.Mui-checked": { color: "#67259a" },
                    }}
                  />
                }
              />
            ))}
          </Box>
          <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1 }}>
            Price
          </Typography>
          <RadioGroup value={true} sx={{ mb: 2.5 }}>
            {priceRanges.map((value, label) => (
              <FormControlLabel
                key={value}
                value={value}
                label={label}
                sx={{
                  m: 0,
                  minHeight: 38,
                  "& .MuiFormControlLabel-label": { fontSize: 15 },
                }}
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: "#92909a",
                      "&.Mui-checked": { color: "#67259a" },
                    }}
                  />
                }
              ></FormControlLabel>
            ))}
          </RadioGroup>
          <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1.25 }}>
            Brand
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 2.5 }}>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                label={brand}
                sx={{
                  m: 0,
                  minHeight: 38,
                  "& .MuiFormControlLabel-label": { fontSize: 15 },
                }}
                control={
                  <CheckBox
                    size="small"
                    sx={{
                      color: "#92909a",
                      "&.Mui-checked": { color: "#67259a" },
                    }}
                  />
                }
              ></FormControlLabel>
            ))}
          </Box>
          <Divider sx={{ mb: 2 }} />
          <FormControlLabel
            label="In stock only"
            sx={{
              m: 0,
              "& .MuiFormControlLabel-label": { fontSize: 15, fontWeight: 600 },
            }}
            control={
              <CheckBox
                size="small"
                sx={{ color: "#92909a", "&.Mui-checked": { color: "#67259a" } }}
              />
            }
          ></FormControlLabel>
        </Box>
        {/* productCard */}
        <ProductInfo />
      </Box>
    </Box>
  );
};

export default SearchResultPage;
