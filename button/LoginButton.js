import React, {useCallback} from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import {Button} from "../helper/StyleUtil";
import axios from "axios";
import throttle from 'lodash.throttle';

const LOGIN_URL = "/ssuzalal/login.do";

const LoginButton = ({history, id, password}) => {
    const handleClick = async e => {
        e.preventDefault();

        await axios.post(LOGIN_URL,
            {
                id: id,
                password: password
            }
        ).then(response => {
            alert("welcome on board! " + id);
            alert(response.data.msg);
            alert(response.data.isAuthenticated);

            if(!response.data.isAuthenticated) {
                history.push("/ssuzalal/emailAuth");
            } else {
                history.push("/ssuzalal/home");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const delayedOnClick = throttle(handleClick, 1000);

    const handleKeyPress = e => {
        if(e.key === "Enter") {
            this.handleClick(e);
        }
    }

    return (
        <Button onClick={delayedOnClick} onKeyPress={handleKeyPress}>로그인하기</Button>
    );
}

export default withRouter(LoginButton);
