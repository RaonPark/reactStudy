import React from 'react';
import axios from 'axios';

const HOME_PAGE = '/ssuzalal/home';
const LOGIN_PAGE = '/ssuzalal/login';

class LoginService {
    static isLoggedIn = async () => {
        let returnedPage = '';
        await axios(
            {
                url: '/beforeLoad',
                method: 'post',
                baseURL: 'http://localhost:8080'
            }
        ).then(function(response) {
            returnedPage = response.data;
            console.log(response.data);
        });

        return returnedPage === HOME_PAGE;
    }

    static loggedInfo = async () => {
        let userInfo = {};

        await axios(
            {
                url: '/getLoginInfo',
                baseURL: 'http://localhost:8080',
                method: 'post'
            }).then(response => {
            userInfo = {
                id: response.data.id,
                username: response.data.username,
                major: response.data.major,
                time: new Date().toLocaleTimeString('ko-kr')
            }
        }).catch(err => {
            console.log(err);
            userInfo = {
                id: 'err',
                username: 'err',
                major: 'err',
                time: '2357-11-13'
            }
        });

        return userInfo;
    }
}

export default LoginService;