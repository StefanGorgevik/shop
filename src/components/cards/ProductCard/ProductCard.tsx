import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Product } from "../../../types/products";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useNavigate } from "react-router-dom";

export const ProductCard: FC<{
  product: Product;
  addToCart: (product: number) => void;
}> = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const [showThumbnail, setShowThumbnail] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThumbnail(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid item xs={2} sm={4} md={4} key={product.id} style={{ height: "100%" }}>
      <Card variant="elevation" raised style={{ height: "100%" }}>
        <CardHeader
          title={
            <Typography variant="h6" className="title">
              {product.title}
            </Typography>
          }
          noWrap
          subheader={
            <Typography variant="body2">{product.category}</Typography>
          }
        />

        {showThumbnail ? (
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt="Paella dish"
            style={{ maxHeight: 200, objectFit: "contain" }}
          />
        ) : (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={200}
          />
        )}
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
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title="See product">
            <Button
              size="small"
              variant="outlined"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <VisibilityIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Add to wishlist">
            <Button size="small" variant="outlined">
              <FavoriteBorderIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Add to cart">
            <Button
              size="small"
              variant="outlined"
              onClick={() => addToCart(product.id)}
            >
              <AddShoppingCartIcon />
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};
