import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const { productName } = useParams();
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        maxWidth: 1360,
        mx: "auto",
        bgcolor: "#f7f7f9",
        borderBottom: "1px solid #5f5c6c",
      }}
    >
      <Typography
        component="p"
        sx={{ color: "#5f5c6c", fontSize: "14px", mb: { xs: 2, sm: 2.5 } }}
      >
        Home / eyeliner /{" "}
        <Box component="span" sx={{ color: "#191923" }}>
          {productName}
        </Box>
      </Typography>
    </Box>
  );
};
export default ProductDetailPage;
