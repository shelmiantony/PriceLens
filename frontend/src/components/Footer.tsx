import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const footerNavItems = ["About", "Contact", "Privacy"];
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #e8e8e8",
        bgcolor: "#fff",
        px: { xs: 2, sm: 4 },
        py: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: 10, color: "#777482" }}>
          {" "}
          PriceLens. Prices are set by each store and can change.
        </Typography>
        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
        >
          {footerNavItems.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && (
                <Typography sx={{ fontSize: 10, color: "#aaa7b0" }}>
                  ·
                </Typography>
              )}
              <Typography
                component="a"
                href={`#${item.toLowerCase()}`}
                sx={{
                  fontSize: 10,
                  color: "#777482",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item}
              </Typography>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
