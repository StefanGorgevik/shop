import { Box, CardContent, Chip, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import "../ProductCard.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Product } from "../../../../types/products";

export const ProductCardContent: FC<{
  product: Product;
}> = ({ product }) => (
  <CardContent
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 5,
    }}
  >
    <Chip
      label={
        <Tooltip title="Price" placement="top">
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <LocalOfferIcon />
            <Typography variant="caption">{product.price}</Typography>
          </Box>
        </Tooltip>
      }
    />
    <Chip
      label={
        <Tooltip title="Remaining products" placement="top">
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <InventoryIcon />
            <Typography variant="caption">{product.stock}</Typography>
          </Box>
        </Tooltip>
      }
    />
    <Chip
      label={
        <Tooltip title="Rating" placement="top">
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <ReviewsIcon />
            <Typography variant="caption">{product.rating}</Typography>
          </Box>
        </Tooltip>
      }
    />
  </CardContent>
);
