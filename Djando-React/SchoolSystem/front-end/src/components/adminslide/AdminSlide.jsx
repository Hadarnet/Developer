import React from 'react';
import {Link} from "react-router-dom";

import './adminslide.css'


export default function AdminSlide() {
    const adminIcons = [
        {
            id: 1,
            iconUrl: "../../static/img/bookkeeping.svg",
            title: "בתי ספר ",
            url: "/school"

        },

        {
            id: 2,
            iconUrl: "../../static/img/books.svg",
            title: "מורים",
            url: "/teacher"

        },
        {
            id: 3,
            iconUrl: '../../static/img/Claas.svg',
            title: "כיתות ",
            url: "/class"

        },
        {
            id: 4,
            iconUrl: "../../static/img/Subjcet.svg",
            title: "מקצועות ",
            url: "/course"

        },

        {
            id: 5,
            iconUrl: "../../static/img/student.svg",
            title: "תלמידים ",
            url: "/student"

        },
        {
            id: 6,
            iconUrl: "../../static/img/login.svg",
            title: "מערכת שעות ",
            url: "/admin/schedule"


        },
        {
            id: 7,
            iconUrl: "../../static/img/upload.svg",
            title: "ספרים וודיאו",
            url: "/admin/studyMaterial"


        },
        {
            id: 8,
            iconUrl: "../../static/img/exam.svg",
            title: "מבחנים ",
            url: "/admin/exam"


        },
        {
            id: 9,
            iconUrl: "../../static/img/result.svg",
            title: "ציונים ",
            url: ".admi/result"

        },
        {
            id: 10,
            iconUrl: "../../static/img/certificate.svg",
            title: "תעודות ",
            url: "./certificate"

        },
        {
            id: 12,
            iconUrl: "../../static/img/messages.svg",
            title: "הודעות ",
            url: "/admin/messages"

        },

        {
            id: 13,
            iconUrl: "../../static/img/gallery.svg",
            title: "גלריה ",
            url: "/admin/gallery"

        },
    ]
    return (
        <div className="adminNav">
            {
                adminIcons.map(x => {
                    return (
                        <div className="adminFlex" key={x.id}>
                            <div className="adminIcon"><img src={x.iconUrl} alt={x.title}/></div>
                            <div className="adminLink"><Link to={x.url} alt={x.title}>{x.title}</Link></div>
                        </div>
                    )
                })

            }

        </div>
    )
}

