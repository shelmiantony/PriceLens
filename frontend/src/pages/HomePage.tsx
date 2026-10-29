import { Box, Chip, Typography } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Productcard from "../components/ProductCard";
import StoreListing from "../components/StoreListing";
import Footer from "../components/Footer";
const Home = () => {
  const popularSearches = [
    "Eyeliner",
    "Lipstick",
    "Kajal",
    "Sunscreen",
    "Face wash",
  ];
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Header />
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          borderLeft: { xs: 0, sm: "1px solid #e9e8ed" },
          borderRight: { xs: 0, sm: "1px solid #e9e8ed" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            minHeight: { xs: 0, sm: 292 },
            px: { xs: 2, sm: 2.5 },
            pt: { xs: 4, sm: 5.8 },
            pb: { xs: 3, sm: 4 },
            bgcolor: "#f7f7fa",
            borderBottom: "1px solid #e9e8ed",
          }}
        >
          <Typography
            sx={{
              color: "purple",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.65px",
              mb: 1.1,
            }}
          >
            COMPARE PRICES ACROSS STORES
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontWeight: 750,
              letterSpacing: { xs: "-1px", sm: "-1.5px" },
              lineHeight: 1.15,
              fontSize: { xs: 28, sm: 35 },
              mb: 1.1,
            }}
          >
            {" "}
            Buy it where it&apos;s cheapest.
          </Typography>
          <Typography
            sx={{
              color: "#625f6b",
              fontSize: { xs: 13, sm: 12 },
              lineHeight: 1.5,
              maxWidth: 440,
              mx: "auto",
              mb: 2.5,
            }}
          >
            {" "}
            Search a product once. See every store that has it in stock, ordered
            from the lowest price to the highest.
          </Typography>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: { xs: 0.75, sm: 1 },
            }}
          >
            <Typography sx={{ fontSize: 13 }}>Popular</Typography>
            {popularSearches.map((item) => (
              <Chip
                key={item}
                label={item}
                clickable
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #e5e5eb",
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#f0edf5" },
                }}
              ></Chip>
            ))}
          </Box>
        </Box>
      </Box>
      <Productcard />
      <StoreListing />
      <Footer />
    </Box>
  );
};
export default Home;
