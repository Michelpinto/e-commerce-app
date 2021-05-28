import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../images/logo.svg";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="commerce.js"
                            height="25px"
                            className={classes.image}
                        />
                    </Link>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <IconButton
                                component={Link}
                                to="/cart"
                                aria-label="show cart items"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={totalItems}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
