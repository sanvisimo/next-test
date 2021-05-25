import {useEffect, useState} from "react";
import Banner from "../Banner";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1444/products").then((data) => setProducts(data.data));
    }, [])

    return (
        <>
            <Banner />
            <Grid container spacing={3}>
                {products.map((product: any) => (
                    <Grid
                        item
                        xs={12}
                        md={4}
                        key={product._id}
                        alignContent="center"
                        alignItems="center"
                    >
                        <ProductCard product={product} />
                    </Grid>)
                )}
            </Grid>
        </>
    )
}

export default ProductList;