import { useSelector } from "react-redux";
import { ImageList } from "@mui/material";
import BascetItem from "../BascetItem";
import Typography from "@mui/material/Typography";

const styles = {
    text: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

const BasketList = () => {
    const items = useSelector((state) => state.item.items);

    return (
        <>
        {items.length !== 0 ? (
        <ImageList cols={4}>
            {items.map((item) => <BascetItem item={item.item} />)}
        </ImageList>
            ) : (
                <Typography variant="h3" sx={styles.text}>
                    Корзина Пуста
                </Typography>
            )}
        </>
    );
};

export default BasketList;
