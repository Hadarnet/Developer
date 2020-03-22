
import React from 'react';
import {Link} from "react-router-dom";
import './tab.css'


export default function Tab() {
    const links = [
        {
            title: "תלמידים",
            url: "/student/"
        },
        {
            title: "הוסף",
            url: "/student/add/"

        },

    ]

    return (
            <div className="tabs">
                {
                    links.map(mlink => {
                        return (
                            <div className="tab"><Link to={{pathname: mlink.url , state: {title: mlink.title}}}>{mlink.title}</Link></div>

                        )
                    })
                }
            </div>

    )
}