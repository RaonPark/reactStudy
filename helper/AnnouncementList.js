import React, {useState, useEffect} from 'react';
import AnnouncementService from "./AnnouncementService";
import {Ul, Li} from './StyleUtil';
import styled from "styled-components";

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
`;

const Legend = styled.legend`
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

const AnnouncementList = props => {
    const [list, setList] = useState(new Map());
    const [type, setType] = useState('');

    useEffect(() => {
        AnnouncementService.getAnnouncement(props.url).then(result => {
            setList(result.map((item) => <Li>
                {item.announcedDate}&nbsp;{item.isCompleted ? "[완료]" : "[진행]"}&nbsp;{item.title}&nbsp;<a target="_blank" href={item.link}>바로가기</a>
            </Li>));
            setType(result[0].announcedType);
            }).catch(err => {
                console.log(err);
            });
        }, []);

    return (
        <Fieldset>
            <Legend>{type}</Legend>
            <Ul>
                {list}
            </Ul>
        </Fieldset>
    );
}

export default AnnouncementList;