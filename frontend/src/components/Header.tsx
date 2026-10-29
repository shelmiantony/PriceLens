import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import type { ReactNode } from "react";

const Header = () => {
  type Navitem = {
    label: string;
    icon: ReactNode;
  };
  const navItems: Navitem[] = [
    { label: "Search", icon: <SearchIcon /> },
    { label: "Store", icon: <StorefrontIcon /> },
    { label: "Wishlist", icon: <FavoriteBorderIcon /> },
    { label: "Login", icon: <LoginIcon /> },
  ];
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
