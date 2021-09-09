import React, {useState, useEffect} from 'react';
import {HomeWrapper} from "../helper/StyleUtil";
import LoginService from "../helper/LoginService";
import AnnouncementList from "../helper/AnnouncementList";

const Home = () => {
    const [id, setId] = useState('NONE');
    const [time, setTime] = useState('2357-11-13');
    const [username, setUsername] = useState('UNWANTED');
    const [major, setMajor] = useState('UNACCEPTED');

    useEffect(() => {
        LoginService.loggedInfo().then(value => {
            setId(value['id']);
            setTime(value['time']);
            setUsername(value['username']);
            setMajor(value['major']);
            console.log(value);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <HomeWrapper>
            <h1>로그인 완료.</h1>
            <h3>Welcome on board! {id}</h3>
            <h4>시간 : {time}</h4>
            <h5>이름 : {username} 학부 : {major}</h5>
            <AnnouncementList />
        </HomeWrapper>
    );
}

export default Home;