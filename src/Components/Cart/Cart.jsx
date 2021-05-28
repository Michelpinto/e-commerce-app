import React from "react";
import { Link } from "react-router-dom";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import illustration from "../../images/Empty_cart.svg";

const Cart = ({
    cart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
}) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <div className={classes.emptyCart}>
            <img
                className={classes.illustration}
                src={illustration}
                alt="empty cart image"
            />
            <Typography variant="subtitle1">Your cart is empty.</Typography>
            <Typography>
                <Button
                    className={classes.linkBtn}
                    href="#text-buttons"
                    color="primary"
                >
                    <Link to="/" className={classes.link}>
                        Please add a few products.
                    </Link>
                </Button>
            </Typography>
        </div>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >
                        Empty cart
                    </Button>
                    <Button
                        component={Link}
                        to="/checkout"
                        className={classes.checkoutButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return "Loading ...";

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>
                Your shopping cart
            </Typography>
            {!cart.line_items?.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;
