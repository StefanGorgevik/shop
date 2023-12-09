import {
  Box,
  Button,
  CardActions,
  Chip,
  Container,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useGetProduct } from "../../queries/useGetProduct";
import { useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Product } from "../../types/products";
import { PageLoader } from "../../components/ui/pageLoader";

export const ProductPage: FC = (props) => {
  const { id } = useParams<{ id: string }>();
  const { data: productData, isLoading } = useGetProduct(id);
  console.log("product", id, productData);

  if (isLoading) return <PageLoader />;
  if (!productData)
    return <Typography variant="h4">Product not found.</Typography>;
  const product = productData as Product; // Replace YourProductType with the actual type

  return (
    <Container>
      <Typography variant="h3" color="primary">
        {product?.title}
      </Typography>
      <Typography variant="caption">{product.category}</Typography>

      <ImageList
        variant="quilted"
        sx={{ width: "100%", height: 500 }}
        cols={3}
        gap={8}
      >
        {product.images.map((item) => (
          <ImageListItem key={item}>
            <img srcSet={`${item}`} src={`${item}`} alt={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Box>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {product.description}
        </Typography>
      </Box>

      <Box
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
      </Box>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Add to wishlist">
          <Button size="small" variant="outlined">
            <FavoriteBorderIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Add to cart">
          <Button size="small" variant="outlined">
            <AddShoppingCartIcon />
          </Button>
        </Tooltip>
      </CardActions>
    </Container>
  );
};
