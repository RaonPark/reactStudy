import axios from 'axios';

class BoardService {
    static getArticles = async () => {
        let board;

        await axios(
            {
                url: '/ssuzalal/getArticles.do',
                method: 'post',
                baseURL: 'http://localhost:8080'
            }
        ).then((response) => {
            board = response.data;
            console.log(board);
        });

        return board;
    }

    static postArticle = async (title, content) => {
        let retVal = false;

        await axios(
            {
                url: '/ssuzalal/postArticle.do',
                method: 'post',
                baseURL: 'http://localhost:8080',
                data: {
                    id: '',
                    password: '',
                    boardId: '',
                    title: title,
                    content: content
                }
            }
        ).then(response => {
            retVal = response.data;
        }).catch(err => {
            console.log(err);
        });

        return retVal;
    }
}

export default BoardService;