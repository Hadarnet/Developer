import React from 'react';

const ShowStudent = (props) => {
    
    
return <div>
        {
            props.location.state.item ? (
                <>
                <div>{props.location.state.item.first_name}</div>
                <div>{props.location.state.item.last_name}</div>
                </>

            ): null
        }
       
                    
</div>
}

export default ShowStudent;