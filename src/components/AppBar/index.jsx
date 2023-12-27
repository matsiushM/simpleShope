import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import {Link} from "react-router-dom";
import {useState} from "react";
import {TITLE} from "../../constants";

const ButtonAppBar = () =>{

    const [isHome, setIsHome] = useState(true);

    const handleToggle = () => {
        setIsHome((prevState) => !prevState);
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:"white"}}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: "black"}}>
                        {TITLE}
                    </Typography>

                    <IconButton
                        size="large"
                        edge="start"
                        color="black"
                        sx={{mr: 2}}
                        onClick={handleToggle}
                    >
                        {isHome ? <Link to={'/'}>
                            <HomeSharpIcon sx={{color: "black"}}/>
                        </Link> : <Link to={'/shoppingBasket'}>
                            <ShoppingBagSharpIcon sx={{color: "black"}}/>
                        </Link>}

                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;