import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from "@mui/material/ListItemText";
import {Button, Divider} from "@mui/material";
import EnhancedAnnouncementList from "../helper/EnhancedAnnouncementList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import {Search} from '../helper/appbar/AppBarUtil';
import {SearchIconWrapper} from '../helper/appbar/AppBarUtil';
import {StyledInputBase} from '../helper/appbar/AppBarUtil';
import HomeIcon from '@mui/icons-material/Home';

class MajorBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            major: props.major
        };
    }

    handleHomeClick = e => {
        e.preventDefault();

        this.props.history.push("/ssuzalal/home");
    }

    render() {
        console.log(this.state.major);
        return (
            <Box sx={{flexGrow:1, width: '100%', bgcolor:'background.paper'}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" sx={{mr : 2}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h7" noWrap component="div" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                            학부 공지사항
                        </Typography>
                        <Button variant="outlined" color="inherit" startIcon={<HomeIcon/>}
                                size="small" sx={{mr: 2}} component="span" onClick={this.handleHomeClick}>
                            홈으로
                        </Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="찾기" inputProps={{'aria-label' : 'search'}}/>
                        </Search>
                    </Toolbar>
                </AppBar>
                <List component="nav">
                    <ListItemText>컴퓨터학부</ListItemText>
                </List>
                <Divider />
                <EnhancedAnnouncementList url={process.env.REACT_APP_CSE_URL}/>
            </Box>
        );
    }
}

export default MajorBoard;