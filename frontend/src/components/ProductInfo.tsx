import { Box, Typography } from "@mui/material";

const ProductInfo = () => {
  type Product = {
    brand: string;
    name: string;
    price: number;
    inStock?: boolean;
    stores: string[];
    color: string;
  };
  const products: Product[] = [
    {
      brand: "Auralé",
      name: "Twist-Up Kohl Pencil",
      price: 129,
      stores: ["Purple", "Nykaa", "Amazon", "Myntra"],
      color: "#f0eaf6",
    },
    {
      brand: "Auralé",
      name: "Smudge-Proof Kajal Liner",
      price: 149,
      stores: ["Purple", "Nykaa", "Amazon", "Myntra"],
      color: "#e8f2f5",
    },
    {
      brand: "Bold Muse",
      name: "Waterproof Pencil Liner",
      price: 179,
      stores: ["Nykaa", "Amazon"],
      color: "#f5eaf0",
    },
    {
      brand: "Lumera",
      name: "Felt-Tip Liner Pen",
      price: 199,
      stores: ["Purple", "Nykaa", "Myntra"],
      color: "#eaf3ec",
    },
    {
      brand: "Lumera",
      name: "Liquid Matte Eyeliner, Black",
      price: 225,
      stores: ["Nykaa", "Amazon", "Myntra"],
      color: "#f5f0e4",
    },
    {
      brand: "Kohl & Co",
      name: "Gel Eyeliner Pot with Brush",
      price: 349,
      stores: ["Purple", "Nykaa", "Amazon", "Myntra"],
      color: "#eceaf6",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        },
        gap: 2.5,
      }}
    >
      {products.map((product) => (
        <Box
          component="article"
          key={product.name}
          sx={{
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid #e1dfe8",
            bgcolor: "#fff",
          }}
        >
          <Box
            role="img"
            aria-label={`${product.name} product image placeholder`}
            sx={{
              height: { xs: 150, sm: 170 },
              backgroundColor: product.color,
              display: "grid",
              placeItems: "center",
              color: "#555362",
              fontSize: 14,
            }}
          >
            Product image
          </Box>
          <Box sx={{ p: 2, minHeight: 155, boxSizing: "border-box" }}>
            <Typography sx={{ color: "#5f5c6c", fontSize: 14, mb: 0.25 }}>
              {product.brand}
            </Typography>
            <Typography
              sx={{
                color: "#191923",
                fontSize: 16,
                lineHeight: 1.3,
                fontWeight: 600,
              }}
            >
              {product.name}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "baseline", gap: 1, mt: 1.5 }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#686574",
                  fontSize: 14,
                }}
              >
                From
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: "#191923",
                  fontSize: 24,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                ₹{product.price}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#686574",
                fontSize: 13.5,
                lineHeight: 1.3,
                mt: 0.75,
              }}
            >
              {product.stores.length} stores · {product.stores.join(", ")}
            </Typography>
          </Box>
        </Box>
      ))}
      {products.length === 0 && (
        <Typography sx={{ color: "#686574", gridColumn: "1 / -1", py: 4 }}>
          No products match these filters.
        </Typography>
      )}
    </Box>
  );
};
export default ProductInfo;
