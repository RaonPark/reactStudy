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
import {TableRow, TableCell, Pagination} from "@mui/material";
import {Link} from 'react-router-dom';
import BoardService from "../helper/BoardService";

const Board = () => {

    const [articles, setArticles] = useState(new Map());

    useEffect(() => {
        const now = new Date().toLocaleDateString();
        BoardService.getArticles().then(value => {
            setArticles(value.map(item => <TableRow>
                <TableCell>
                    {new Date(item.postedTime).toLocaleDateString('ko-kr', { timeZone: 'UTC' }) === now
                        ? new Date(item.postedTime).toLocaleTimeString('ko-kr', {timeZone: 'UTC'})
                        : new Date(item.postedTime).toLocaleDateString('ko-kr', {timeZone: 'UTC'})}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.content}</TableCell>
            </TableRow>));
            console.log(value);
        }).catch(err => {
            console.log(err);
        });
    }, []);


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="게시판"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            게시판
                        </Typography>
                        <Button color="inherit" component={Link} to="/ssuzalal/article">게시글 쓰기</Button>
                        <Button color="inherit" component={Link} to="/ssuzalal/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>시간</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>내용</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles}
                </TableBody>
            </Table>
            <Pagination count={articles.size === 0 ? 1 : articles.size} variant="outlined" color="secondary"/>
        </div>

    );
}

export default Board;
