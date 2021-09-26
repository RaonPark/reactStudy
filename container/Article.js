import React, {useState} from 'react';
import {Table, TableCell, TableRow, TableBody, TextField, Button} from "@mui/material";
import BoardService from "../helper/BoardService";

const Article = (props) => {
    const handleTitleChange = e => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleContentChange = e => {
        e.preventDefault();
        setContent(e.target.value)
    }

    const handleSubmitClick = e => {
        e.preventDefault();
        BoardService.postArticle(title, content).then(value => {
            if(value) {
                alert("게시글 작성이 완료되었습니다.");
                props.history.push("/ssuzalal/board");
            } else {
                alert("게시글 작성에 실패했습니다. 이 문제가 계속될 경우 관리자에게 문의해주세요.");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField required name="title" label="제목" value={title} onChange={handleTitleChange} defaultValue="제목을 입력해주세요."/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField multiline name="content" label="글" value={content} onChange={handleContentChange}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button variant="contained" component="span" onClick={handleSubmitClick}>글 쓰기</Button>
        </div>
    )
}

export default Article;