import { Box } from "@mui/material";

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
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
        gap: 2.5,
      }}
    ></Box>
  );
};
export default ProductInfo;
