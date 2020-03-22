import React from 'react';
import './home.css';
import UserBar from '../userbar/UserBar'
import Welcome from '../welcome/Welcome'


export default function main(props) {
    console.log('props',props.location.state)

    return(<div className="main">
              <div className='welcomeMain'>
                 <Welcome/>
                 <UserBar/>

              </div>

            </div>)
   }

