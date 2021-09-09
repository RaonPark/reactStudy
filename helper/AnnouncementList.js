import React, {useState, useEffect} from 'react';
import AnnouncementService from "./AnnouncementService";
import {Ul, Li, Button} from './StyleUtil';
import {Link} from "react-router-dom";

const BACHELOR = "/ssuzalal/bachelor.do";

const AnnouncementList = () => {
    const [list, setList] = useState(new Map());

    useEffect(() => {
        AnnouncementService.getAnnouncement(BACHELOR).then(result => {
            setList(result.map((item) => <Li>
                {item.announcedDate}&nbsp;{item.isCompleted ? "[완료]" : "[진행]"}&nbsp;{item.title}&nbsp;<a target="_blank" href={item.link}>바로가기</a>
            </Li>));
            }).catch(err => {
                console.log(err);
            });
        }, []);

    return (
        <Ul>
            {list}
        </Ul>
    );
}

export default AnnouncementList;