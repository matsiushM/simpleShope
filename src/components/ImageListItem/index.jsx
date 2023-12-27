import {CardMedia, IconButton, ImageListItem, ImageListItemBar, Paper, Modal, Box, CardContent} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/itemSlice";

const style = {

    cardMedia: {
        objectFit: 'container',
        backgroundPosition: 'contain',
        width: "100%",
        height: "75%",
        borderRadius: 2
    },

    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        backdropFilter: "blur(25px)",
    },
};


const ItemCard = ({item}) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addItems = () => dispatch(addItem({item}));

    return (
        <ImageListItem sx={{m: 1}}>
            <Paper elevation={3}>
                <CardMedia sx={style.cardMedia} component="img" image={item.image}/>

                <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                </CardContent>

                <ImageListItemBar
                    actionIcon={
                    <>
                        <IconButton onClick={addItems} sx={{color: 'rgba(255, 255, 255, 0.54)'}}>
                            <AddShoppingCartIcon/>
                        </IconButton>

                        <IconButton  onClick={handleOpen} sx={{color: 'rgba(255, 255, 255, 0.54)'}}>
                            <InfoIcon/>
                        </IconButton>
                    </>
                    }
                />
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style.modal}>
                        <Typography>{item.description}</Typography>
                    </Box>
                </Modal>
            </Paper>
        </ImageListItem>
    )
        ;
}
export default ItemCard;