import React from "react";
import Product from "./Product";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function ListOfProducts({products, removeProduct }) {
    if (products.length)
        return (
            <Paper>
                <List>
                    {products.map((product, i) => (
                        <React.Fragment key={i}>
                            <Product
                                {...product}
                                key={product._id}
                                removeProduct={removeProduct}
                            />
                            {i < products.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default ListOfProducts;