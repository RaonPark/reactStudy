import React, {useEffect, useState} from "react";
import {List, ListItemButton, ListItemText} from "@mui/material";
import AnnouncementService from "./AnnouncementService";

const EnhancedAnnouncementList = props => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [enhancedList, setEnhancedList] = useState([]);

    const handleListItemClick = (event, index, link) => {
        event.preventDefault();
        setSelectedIndex(index);
    }

    console.log(props.url);

    useEffect(() => {
        AnnouncementService.getAnnouncement(props.url).then(value => {
            setEnhancedList(value.map(item =>
                <List component="nav" aria-label="major-announcements">
                    <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0, item.link)}>
                        <ListItemText primary={item.title} secondary={item.announcedDate}/>
                    </ListItemButton>
                </List>
            ));
        })
    }, []);

    return (
        <div>
            {enhancedList}
        </div>
    );
}

export default EnhancedAnnouncementList;