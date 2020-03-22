import React from 'react';
import './showTeacher.css'

const ShowTeacher = (props) => {
    
    
return <div className="show">
        {
            props.location.state.item ? (
                <div className="cShow">
                <div className="showImg"><img src={props.location.state.item.image}/></div>
                <div >{props.location.state.item.first_name}</div>


               
                            </div>

            ): null
        }
       
                    
</div>
}

export default ShowTeacher;