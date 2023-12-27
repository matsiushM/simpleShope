import {CardMedia, IconButton, ImageListItem, ImageListItemBar, Paper, Modal, Box} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removeItem} from "../../store/itemSlice";

const style = {
    box: {
        height: 550,
    },

    cardMedia: {
        objectFit: 'container',
        backgroundPosition: 'contain',
        Width: "100%",
        height: "75%",
    },

    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        height: "75%",
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    },
    modalbox: {
        color: "white",
        backdropFilter: "blur(25px)",
    }
};


const BascetItem = ({item}) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveItem = () => {dispatch(removeItem({item}));}

    return (
        <ImageListItem sx={{m: 1}}>
            <Paper elevation={3} sx={style.box}>
                <CardMedia sx={style.cardMedia} component="img" image={item.image}/>

                <Typography variant="h5">{item.title}</Typography>

                <ImageListItemBar
                    sx={{width: "100%"}}
                    actionIcon={
                        <>
                            <IconButton onClick={handleOpen} sx={{color: 'rgba(255, 255, 255, 0.54)'}}>
                                <InfoIcon/>
                            </IconButton>
                            <IconButton onClick={handleRemoveItem} sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                                <RemoveIcon />
                            </IconButton>
                        </>
                    }
                />
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style.modal}>
                        <Typography sx={style.modalbox}>{item.description}</Typography>
                    </Box>
                </Modal>
            </Paper>
        </ImageListItem>
    )
        ;
}
export default BascetItem;