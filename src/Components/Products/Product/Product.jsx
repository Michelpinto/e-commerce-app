import React from "react";

import {
    Card,
    CardMedia,
    cardContent,
    CardActions,
    Typography,
    IconButton,
    CardContent,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.media.source}
                title={product.name}
            />

            <CardContent>
                <div className={classes.CardContent}>
                    <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "600" }}
                        gutterBottom
                    >
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>

                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary"
                />
            </CardContent>

            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton
                    aria-label="Add to cart"
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
