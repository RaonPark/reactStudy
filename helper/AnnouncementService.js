import React from "react";
import axios from "axios";

class AnnouncementService {
    static async getAnnouncement(url) {
        let announcements;

        console.log(url);

        await axios(
            {
                url: "" + url,
                method: 'post',
                baseURL: 'http://localhost:8080'
            }
        ).then(response => {
            console.log(response.data);
            announcements = response.data;
        }).catch(err => {
            console.log(err);
            announcements = 'ERROR';
        });

        return announcements;
    }
}

export default AnnouncementService;