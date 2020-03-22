
import React from 'react';
import {Link} from "react-router-dom";

import './navbar.css';


export default function header() {
    const links = [
        {
            title: "בית",
            url: "/"
        },
        {
            title: "אודות",
            url: "/about"

        },
        {
            title: "אנשי סגל",
            url: "/employee"

        },
        {
            title: "אזור הודעות",
            url: "/messages"

        },
        {
            title: "לוח אירועים",
            url: "/event"

        },
        {
            title: "גלריה",
            url: "/gallery"

        },
        {
            title: "צור קשר",
            url: "/contactus"

        }

        ,
        {
            title: "לוח בקרה",
            url: "./admin"

        }
  ,

    ]

    return (
        <div className="navbar">
            <div className="header">
                {
                    links.map(mlink => {
                        return (
                            <div className="navText"><Link to={{
  pathname: mlink.url ,
  state: {
   title: mlink.title
  }
}}>{mlink.title}</Link></div>

                        )
                    })
                }
            </div>
        </div>

    )
}