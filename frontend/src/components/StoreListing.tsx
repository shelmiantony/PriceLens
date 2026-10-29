import { Box, Chip, Typography } from "@mui/material";

const StoreListing = () => {
  const stores = ["Nykaa", "Purple", "Amazon", "Myntra"];
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4 },
        py: 2,
        bgcolor: "#f7f7f9",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography
          sx={{ mb: 1, fontSize: 14, fontWeight: 700, color: "#17131e" }}
        >
          Stores we compare
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
          }}
        >
          {stores.map((item) => (
            <Chip
              key={item}
              label={item}
              sx={{
                height: 30,
                px: 0.25,
                bgcolor: "#fff",
                border: "1px solid #e5e5eb",
                borderRadius: 2,
                "& .MuiChip-label": { px: 1.5, fontSize: 11, fontWeight: 600 },
              }}
            />
          ))}
          <Chip
            label="More stores coming"
            variant="outlined"
            sx={{
              height: 30,
              borderStyle: "dashed",
              borderColor: "#d8d5df",
              borderRadius: 2,
              color: "#66616f",
              "& .MuiChip-label": { px: 1.5, fontSize: 11 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StoreListing;
