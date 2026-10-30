import { Box, Paper, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate("/search", { state: { isSearch: true, query: query.trim() } });
  };
  return (
    <Box
      sx={{
        minHeight: 88,
        bgcolor: "#f5f5f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {" "}
      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 440,
          height: 40,
          px: 1.25,
          minWidth: 0,
          border: "1px solid #dedee3",
          borderRadius: 2,
          boxShadow: "0 3px 12px rgba(30, 20, 60, 0.06)",
        }}
      >
        {" "}
        <SearchIcon sx={{ color: "#50515a", fontSize: 18, mr: 1 }} />
        <InputBase
          placeholder="Eyelinear"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          inputProps={{ "aria-label": "Search products" }}
          sx={{ flex: 1, minWidth: 0, fontSize: { xs: 13, sm: 14 } }}
        ></InputBase>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{
            minHeight: 30,
            minWidth: { xs: 58, sm: 64 },
            ml: 1,
            px: { xs: 1, sm: 1.5 },
            borderRadius: 1.5,
            bgcolor: "#5b248b",
            textTransform: "none",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};
export default SearchBar;
