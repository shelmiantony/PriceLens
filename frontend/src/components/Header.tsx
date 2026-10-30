import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Paper,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type HeaderProps = {
  isSearch?: boolean;
  query?: string;
};
const Header = ({ isSearch = false, query = "" }: HeaderProps) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(query);
  type Navitem = {
    label: string;
    icon: ReactNode;
  };
  const allItems: Navitem[] = [
    { label: "Search", icon: <SearchIcon /> },
    { label: "Store", icon: <StorefrontIcon /> },
    { label: "Wishlist", icon: <FavoriteBorderIcon /> },
    { label: "Login", icon: <LoginIcon /> },
  ];
  // On the search page, only show Wishlist and Login
  const navItems = isSearch
    ? allItems.filter((i) => i.label == "Wishlist" || i.label == "Login")
    : allItems;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/search", { state: { isSearch: true, query: value.trim() } });
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#202124",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 60, sm: 72 },
          px: { xs: 1.5, sm: 3 },
          justifyContent: "space-between",
          gap: { xs: 0.5, sm: 2 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
          <Box
            sx={{
              width: 17,
              height: 17,
              borderRadius: "5px",
              bgcolor: "purple",
              display: "grid",
              placeItems: "center",
            }}
          >
            {" "}
            <ShowChartIcon
              sx={{ color: "#fff", fontSize: 12, strokeWidth: 2 }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, letterSpacing: "-0.25px", fontSize: 12 }}
          >
            PriceLens
          </Typography>
        </Box>
        {/* Search box (only on the search result page) */}
        {isSearch && (
          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              maxWidth: 440,
              minWidth: 0,
              height: 38,
              px: 1.25,
              bgcolor: "#f5f5f7",
              border: "1px solid #dedee3",
              borderRadius: 2,
            }}
          >
            <SearchIcon sx={{ color: "#50515a", fontSize: 18, mr: 1 }} />
            <InputBase
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search products"
              inputProps={{ "aria-label": "Search products" }}
              sx={{ flex: 1, minWidth: 0, fontSize: { xs: 13, sm: 14 } }}
            />
          </Paper>
        )}
        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          {navItems.map(({ label, icon }) => (
            <Button
              key={label}
              color="inherit"
              aria-label={label}
              startIcon={icon}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                minWidth: { xs: 40, sm: "auto" },
                px: { xs: 0.5, sm: 1.5 },
                "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } },
              }}
            >
              <Typography
                component="span"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                {label}
              </Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
