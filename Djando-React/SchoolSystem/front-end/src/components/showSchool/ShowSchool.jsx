import React from 'react';
import './showSchool.css'

const ShowSchool = (props) => {
    
    
return <div className="show">
        {
            props.location.state.item ? (
                <div className="cShow">
                <div className="showImg"><img src={props.location.state.item.image}/></div>
                <div >{props.location.state.item.name}</div>
                <div>{props.location.state.item.school_type}</div>
                <div>{props.location.state.item.type_education}</div>
                <div>{props.location.state.item.education_phase}</div>
                <div>{props.location.state.item.city}</div>
                <div>{props.location.state.item.phone}</div>
                <div>{props.location.state.item.fax}</div>
                <div>{props.location.state.item.email}</div>
                <div>{props.location.state.item.facebook}</div>
                <div>{props.location.state.item.instagram}</div>

               
                            </div>

            ): null
        }
       
                    
</div>
}

export default ShowSchool;