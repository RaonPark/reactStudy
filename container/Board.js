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
    function handleWriteClick(e) {
        e.preventDefault();

        props.history.push("/ssuzalal/article");
    }

    const [articles, setArticles] = useState(new Map());

    useEffect(() => {
        BoardService.getArticles().then(value => {
            setArticles(value);
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
                        <Button color="inherit" onClick={handleWriteClick}>게시글 쓰기</Button>
                        <Button color="inherit" component={Link} to="/ssuzalal/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>순번</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>학부</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles.size > 0 && articles.map((item) => <TableRow>
                        <TableCell>{item.boardId}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.id}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <Pagination count={articles.size === 0 ? 1 : articles.size} variant="outlined" color="secondary"/>
        </div>

    );
}

export default Board;
