import {
    Avatar, Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    createStyles,
    Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme ) =>
    createStyles({
        card: {},
        cardComponent: {
            position: "relative"
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        price: {
            position: "absolute",
            right: 20,
            top: -20,
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "flex-end"
        },
        avatar: {
            backgroundColor: red[500],
        },
        actions: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }),
);

export type ProductProps = {
    product: ProductType;
}

export type ProductType = {
    _id: string;
    name: string;
    description: string;
    price: number
}

const ProductCard = ({product}: ProductProps) => {
    const classes = useStyles();

    return <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image="https://cdn.quasar.dev/img/chicken-salad.jpg"
            title="Paella dish"
        />
        <CardContent className={classes.cardComponent}>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p" className={classes.price}>
                <Avatar className={classes.avatar}>
                    <FavoriteIcon />
                </Avatar>
                <div>{product.price} punti</div>
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
            <Button aria-label="share" color="primary" variant="contained">
                RICHIEDI
            </Button>
        </CardActions>
    </Card>
}

export default ProductCard