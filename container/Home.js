import React, {useState, useEffect} from 'react';
import {HomeWrapper} from "../helper/StyleUtil";
import LoginService from "../helper/LoginService";
import AnnouncementList from "../helper/AnnouncementList";
import Button from '@mui/material/Button';
import {ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";

const BACHELOR = "/ssuzalal/bachelor.do";
const SCHOLARSHIP = "/ssuzalal/scholarship.do";
const EXCHANGE = "/ssuzalal/exchange.do";
const FOREIGNER = "/ssuzalal/foreigner.do";
const RECRUIT = "/ssuzalal/recruit.do";
const EVENTS = "/ssuzalal/events.do";
const TEACHER_RECRUIT = "/ssuzalal/teacher_recruit.do";
const TEACHING_PROFESSION = "/ssuzalal/teaching_profession.do";
const VOLUNTEER = "/ssuzalal/volunteer.do";
const ETC = "/ssuzalal/etc.do";
const COVID19 = "/ssuzalal/covid19.do";

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
            <h2>환영합니다. {id}</h2>
            <h4>시간 : {time}</h4>
            <h5>이름 : {username} 학부 : {major}</h5>
            <ButtonGroup variant="text">
                <Button component={Link} to="/ssuzalal/board">게시판으로</Button>
                <Button component={Link} to="/ssuzalal/majorBoard" major={major}>학부 공지보기</Button>
            </ButtonGroup>
            <AnnouncementList url={BACHELOR}/>
            <AnnouncementList url={SCHOLARSHIP}/>
            <AnnouncementList url={EXCHANGE}/>
            <AnnouncementList url={FOREIGNER}/>
            <AnnouncementList url={RECRUIT}/>
            <AnnouncementList url={EVENTS}/>
            <AnnouncementList url={TEACHER_RECRUIT}/>
            <AnnouncementList url={TEACHING_PROFESSION}/>
            <AnnouncementList url={VOLUNTEER}/>
            <AnnouncementList url={ETC}/>
            <AnnouncementList url={COVID19}/>
        </HomeWrapper>
    );
}

export default Home;