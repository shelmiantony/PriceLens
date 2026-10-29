import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Paper,
  Grid,
  Chip,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import Search from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import TrendingDown from "@mui/icons-material/TrendingDown";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
// import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";

const popularSearches = [
  "Eyeliner",
  "Lipstick",
  "Kajal",
  "Sunscreen",
  "Face wash",
];

const stores = ["Nykaa", "Purplle", "Amazon", "Myntra"];

function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#how-it-works") {
      document.getElementById("how-it-works")?.scrollIntoView();
    }
  }, [location.hash]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff" }}>
      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: "#242137",
          borderBottom: "1px solid #f0edf5",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, gap: 3 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ cursor: "pointer", mr: "auto" }}
              onClick={() => navigate("/")}
            >
              <Box
                sx={{
                  bgcolor: "#6c4be8",
                  color: "#fff",
                  width: 38,
                  height: 38,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <ShoppingBagOutlined />
              </Box>

              <Typography
                variant="h5"
                fontWeight={800}
                sx={{ letterSpacing: -1 }}
              >
                Price
                <Box component="span" sx={{ color: "#6c4be8" }}>
                  Lens
                </Box>
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button color="inherit" onClick={() => navigate("/search")}>
                Search
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  document
                    .getElementById("stores")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Stores
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                How it works
              </Button>
            </Stack>

            <IconButton
              aria-label="Wishlist"
              onClick={() => navigate("/wishlist")}
              sx={{ color: "#514a63" }}
            >
              <FavoriteBorder />
            </IconButton>

            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              sx={{
                borderColor: "#e6e1f2",
                color: "#383146",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Log in
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 3,
            p: { xs: 3, md: 7 },
            borderRadius: 4,
            background:
              "linear-gradient(120deg, #faf8ff 0%, #f5f1ff 60%, #fff7f0 100%)",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.15fr 0.85fr",
            },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box>
            <Chip
              icon={<TrendingDown />}
              label="SMARTER SHOPPING STARTS HERE"
              sx={{
                bgcolor: "#eee8ff",
                color: "#7455d7",
                fontWeight: 700,
                letterSpacing: 0.5,
                mb: 2,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 43, md: 62 },
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: -2.5,
                color: "#242137",
              }}
            >
              Buy it where
              <br />
              it's{" "}
              <Box component="span" sx={{ color: "#6c4be8" }}>
                cheapest.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#777386",
                maxWidth: 490,
                lineHeight: 1.9,
                mt: 2,
                mb: 3,
              }}
            >
              Search a product once. See every store that has it in stock,
              ordered from the lowest price to the highest.
            </Typography>

            <Box component="form" onSubmit={handleSearch}>
              <Paper
                elevation={0}
                sx={{
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "1px solid #eae6f4",
                  borderRadius: 3,
                  maxWidth: 590,
                }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search eyeliner, lipstick, sunscreen..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  slotProps={{
                    input: {
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ color: "#898398" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  inputProps={{ "aria-label": "Search products" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#6c4be8",
                    borderRadius: 2,
                    px: 3,
                    py: 1.4,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#5838d2" },
                  }}
                >
                  Search
                </Button>
              </Paper>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
              sx={{ mt: 2 }}
            >
              <Typography variant="body2" color="text.secondary">
                Popular:
              </Typography>

              {popularSearches.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  clickable
                  onClick={() => {
                    setSearch(item);
                    navigate(`/search?q=${encodeURIComponent(item)}`);
                  }}
                  sx={{
                    bgcolor: "#fff",
                    border: "1px solid #e7e1f2",
                    "&:hover": {
                      borderColor: "#6c4be8",
                      color: "#6c4be8",
                    },
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 3 }}>
              {["Compare prices", "Find the best deal"].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  alignItems="center"
                  spacing={0.7}
                >
                  {/* <CheckCircleOutline sx={{ fontSize: 17, color: "#309b62" }} /> */}
                  <Typography variant="caption" color="text.secondary">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Hero illustration */}
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              placeItems: "center",
              minHeight: 330,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 255,
                height: 255,
                borderRadius: "50%",
                bgcolor: "#e7dfff",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 155,
                  height: 155,
                  bgcolor: "#fff",
                  borderRadius: 5,
                  display: "grid",
                  placeItems: "center",
                  color: "#6c4be8",
                  boxShadow: "0 16px 40px #6c4be81c",
                  transform: "rotate(-7deg)",
                }}
              >
                <ShoppingBagOutlined sx={{ fontSize: 85 }} />
              </Box>
            </Box>

            <Paper
              elevation={2}
              sx={{
                position: "absolute",
                top: 20,
                left: 0,
                p: 2,
                borderRadius: 3,
              }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center">
                <TrendingDown sx={{ color: "#309b62" }} />
                <Box>
                  <Typography fontWeight={700} fontSize={13}>
                    Best price found!
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Shop smarter
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                position: "absolute",
                right: 0,
                bottom: 20,
                p: 2,
                borderRadius: 3,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <StorefrontOutlined sx={{ color: "#6c4be8" }} />
                <Box>
                  <Typography
                    variant="caption"
                    color="success.main"
                    fontWeight={700}
                  >
                    BEST DEAL
                  </Typography>
                  <Typography fontWeight={700} fontSize={12}>
                    Lowest price, first
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* How it works */}
      <Container maxWidth="lg" id="how-it-works">
        <Box sx={{ py: 8 }}>
          <Box textAlign="center" sx={{ mb: 5 }}>
            <Typography
              variant="overline"
              sx={{ color: "#7455d7", fontWeight: 700, letterSpacing: 1.5 }}
            >
              SIMPLE. SMART. SAVING.
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ fontSize: { xs: 28, md: 34 }, mt: 1 }}
            >
              How it works
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Three simple steps to find your best deal.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                number: "01",
                title: "Search a product",
                description: "Type what you want, like eyeliner or sunscreen.",
                icon: <Search />,
                color: "#f0eaff",
              },
              {
                number: "02",
                title: "Compare every store",
                description: "See store prices and availability, lowest first.",
                icon: <StorefrontOutlined />,
                color: "#fff0e5",
              },
              {
                number: "03",
                title: "Buy the best deal",
                description:
                  "Visit the retailer's website and buy your product.",
                icon: <ShoppingBagOutlined />,
                color: "#e7f7ed",
              },
            ].map((step) => (
              <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: "#eeebf5",
                    borderRadius: 4,
                    transition: "0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      textAlign="right"
                      fontWeight={800}
                      fontSize={28}
                      sx={{ color: "#e5e0f0" }}
                    >
                      {step.number}
                    </Typography>

                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        bgcolor: step.color,
                        display: "grid",
                        placeItems: "center",
                        color: "#6c4be8",
                        mb: 3,
                      }}
                    >
                      {step.icon}
                    </Box>

                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {step.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      variant="body2"
                      lineHeight={1.8}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "#f0edf5" }} />

        {/* Stores */}
        <Box id="stores" sx={{ py: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: "#7455d7", fontWeight: 700 }}
          >
            YOUR FAVOURITE RETAILERS
          </Typography>

          <Typography variant="h4" fontWeight={800} sx={{ mt: 1, mb: 1 }}>
            Stores we compare
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Find products across popular shopping platforms.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={2}>
            {stores.map((store) => (
              <Paper
                key={store}
                variant="outlined"
                sx={{
                  px: 2.5,
                  py: 2,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  borderColor: "#eeebf5",
                }}
              >
                <StorefrontOutlined sx={{ color: "#6c4be8" }} />
                <Typography fontWeight={600}>{store}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Bottom call to action */}
        <Box
          sx={{
            mb: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(110deg, #f2edff, #fff6ef)",
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={800}>
              Ready to find your best deal?
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              One search can help you shop smarter.
            </Typography>
          </Box>

          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() =>
              document
                .getElementById("search-top")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              bgcolor: "#6c4be8",
              textTransform: "none",
              px: 3,
              py: 1.5,
            }}
          >
            Start comparing
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ borderTop: "1px solid #f0edf5" }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            gap={2}
            py={3}
          >
            <Typography fontWeight={800} fontSize={19}>
              Price
              <Box component="span" sx={{ color: "#6c4be8" }}>
                Lens
              </Box>
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Prices are set by each store and can change.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button size="small" color="inherit">
                About
              </Button>
              <Button size="small" color="inherit">
                Contact
              </Button>
              <Button size="small" color="inherit">
                Privacy
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 12, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        This page will be implemented next.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to home
      </Button>
    </Container>
  );
}

function SearchPage() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Search results for "{query}"
      </Typography>
      <Typography color="text.secondary">
        Next, we'll display matching products and compare store prices.
      </Typography>
    </Container>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reports" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/wishlist"
        element={<PlaceholderPage title="Your Wishlist" />}
      />
      <Route
        path="/login"
        element={<PlaceholderPage title="Log in to PriceLens" />}
      />
    </Routes>
  );
}
