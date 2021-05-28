import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: "5%",
        textAlign: "center",
        marginBottom: "2rem",
    },
    emptyButton: {
        minWidth: "150px",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "5px",
        },
        [theme.breakpoints.up("xs")]: {
            marginRight: "20px",
        },
    },
    checkoutButton: {
        minWidth: "150px",
    },
    linkBtn: {
        textTransform: "lowercase",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    cardDetails: {
        display: "flex",
        alignItems: "center",
        marginTop: "10%",
        width: "100%",
        justifyContent: "space-between",
    },
    emptyCart: {
        textAlign: "center",
    },
    illustration: {
        maxWidth: "15rem",
        marginBottom: "2rem",
    },
}));
