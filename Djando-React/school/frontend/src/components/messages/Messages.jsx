import React from 'react';
import './messages.css';
import MessagesText from './MessagesText'


export default function messages() {
    return(<div className="messages">
             <div className="titleMessages">
               <MessagesText/>

              </div>

              <div className="mainMessages">

             </div>

             </div>
            )
   }