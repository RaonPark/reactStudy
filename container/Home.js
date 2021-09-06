import React, {useState} from 'react';
import {Wrapper} from "../helper/StyleUtil";
import LoginService from "../helper/LoginService";

const Home = () => {
    const [id, setId] = useState('NONE');
    const [time, setTime] = useState('2357-11-13');
    const [username, setUsername] = useState('UNWANTED');
    const [major, setMajor] = useState('UNACCEPTED');

    LoginService.loggedInfo().then(value => {
        setId(value['id']);
        setTime(value['time']);
        setUsername(value['username']);
        setMajor(value['major']);
    }).catch(err => {
        console.log(err);
    });

    return(
        <Wrapper>
            <h1>로그인 완료.</h1>
            <h3>Welcome on board! {id}</h3>
            <h4>시간 : {time}</h4>
            <h5>이름 : {username} 학부 : {major}</h5>
        </Wrapper>
    );
}

export default Home;