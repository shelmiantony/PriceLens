import { Box, Paper, Typography } from "@mui/material";

const HowtoWork = () => {
  const steps = [
    {
      number: "1",
      title: "Search a product",
      description:
        "Type what you want, like eyeliner or sunscreen. Typos are fine.",
    },
    {
      number: "2",
      title: "Compare every store",
      description:
        "Pick a product and see each store’s price, stock and last update, lowest first.",
    },
    {
      number: "3",
      title: "Buy from the best deal",
      description:
        "Open the store’s own page and check out there. Turn on an alert if the price drops.",
    },
  ];
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: 4,
        borderTop: "1px solid #e8e8e8",
        borderBottom: "1px solid #e8e8e8",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 20 },
            fontWeight: 600,
            letterSpacing: "-0.6px",
            mb: 2,
          }}
        >
          How it works
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: 1.75,
          }}
        >
          {steps.map((item) => (
            <Paper
              key={item.number}
              sx={{
                minHeight: 120,
                p: { xs: 1.75, sm: 2 },
                borderRadius: 3,
                bgcolor: "#f7f7f9",
              }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  mb: 1.25,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 1.5,
                  bgcolor: "#5b248b",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  {item.number}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "-0.2px",
                  color: "#17131e",
                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontSize: 11, lineHeight: 1.55, color: "#65616e" }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default HowtoWork;
