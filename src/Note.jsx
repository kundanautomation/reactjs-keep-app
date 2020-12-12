import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) =>{

    const delNote = () =>{
        props.event(props.id);
    }

    return(
        <>
                <div className="note">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <button className="btn">
                        <DeleteOutlineIcon className="deleteIcon" onClick={delNote} />    
                    </button>
                </div>

        </>
    )
}

export default Note;