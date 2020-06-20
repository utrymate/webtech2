import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Product({ _id, name, price, removeProduct }) {
    return (
        <ListItem style={{ height: "64px" }}>
            <ListItemText>
                {name}
            </ListItemText>
            <ListItemText>
                {price} HUF
            </ListItemText>
            <ListItemSecondaryAction>
                <Button aria-label='Delete' onClick={() => removeProduct(_id)}>
                    Törlés
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Product;