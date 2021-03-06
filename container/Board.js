import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from "@mui/material/TableBody";
import {TableRow, TableCell, TableFooter, Pagination, Modal, DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions} from "@mui/material";
import {Link} from 'react-router-dom';
import BoardService from "../helper/BoardService";

const Board = () => {
    const [value, setValue] = useState([]);
    const [articles, setArticles] = useState(new Map());
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [postedTime, setPostedTime] = useState(new Date().toString());
    const [postedId, setPostedId] = useState('');
    const [content, setContent] = useState('');

    const handleRowClick = (e, item) => {
        e.preventDefault();

        setOpen(true);
        const now = new Date().toLocaleDateString('ko-kr', {timeZone: 'UTC'});

        const postedTime = (new Date(item.postedTime).toLocaleDateString('ko-kr', { timeZone: 'UTC' }) === now)
            ? new Date(item.postedTime).toLocaleTimeString('ko-kr', {timeZone: 'UTC'})
            : new Date(item.postedTime).toLocaleDateString('ko-kr', {timeZone: 'UTC'})

        console.log(item);
        setTitle(item.title);
        setPostedTime(postedTime);
        setPostedId(item.id);
        setContent(item.content);
    }

    const handleDialogClose = e => {
        e.preventDefault();

        setOpen(false);
    }

    useEffect(() => {
        const now = new Date().toLocaleDateString('ko-kr', {timeZone: 'UTC'});

        BoardService.getArticles().then(value => {
            setValue(value);
            setArticles(value.map(item => <TableRow onClick={(event => handleRowClick(event, item))}>
                <TableCell>
                    {new Date(item.postedTime).toLocaleDateString('ko-kr', { timeZone: 'UTC' }) === now
                        ? new Date(item.postedTime).toLocaleTimeString('ko-kr', {timeZone: 'UTC'})
                        : new Date(item.postedTime).toLocaleDateString('ko-kr', {timeZone: 'UTC'})}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell><Button onClick={handleRowClick} name="0">??????</Button></TableCell>
            </TableRow>));
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="?????????"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ?????????
                        </Typography>
                        <Button color="inherit" component={Link} to="/ssuzalal/home.js">?????????</Button>
                        <Button color="inherit" component={Link} to="/ssuzalal/article">????????? ??????</Button>
                        <Button color="inherit" component={Link} to="/ssuzalal/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>??????</TableCell>
                        <TableCell>??????</TableCell>
                        <TableCell>?????????</TableCell>
                        <TableCell>??????</TableCell>
                        <TableCell>&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles}
                </TableBody>
                <TableFooter>
                    <Pagination count={articles.size === 0 ? 1 : articles.size} variant="outlined" color="secondary"/>
                </TableFooter>
            </Table>
            <Dialog open={open} onClose={handleDialogClose} scroll="paper">
                <DialogTitle>??????&nbsp;:&nbsp;{title}&nbsp;?????????&nbsp;{postedId}&nbsp;&nbsp;??????&nbsp;{postedTime}</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText tabIndex={-1} ref={descriptionElementRef}>
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>??????</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}

export default Board;
