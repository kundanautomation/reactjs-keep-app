import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{
    
    const [note,setNote] = useState({
        title: '',
        desc : ''
    });

    const indexEvent = (event) =>{
        const {name,value} = event.target;
        setNote((preValue)=>{              
            return{
                ...preValue,
                [name]: value
              }
        });
    }

    const addEvent = () =>{        
        props.passNote(note);                 
        setNote(()=>{
            return{
                title:'',
                desc:''
            }
        })
    }

    return(
        <>            
            <div className="main_note">
                <form>
                    <input name="title" type="text" placeholder="Title" value={note.title} autoComplete="off" onChange={indexEvent}  />
                    <textarea name="desc" placeholder="Write a note..." value={note.desc} onChange={indexEvent}></textarea>
                    <Button onClick={addEvent}><AddIcon className="plus_sign"/></Button>
                </form>
            </div>
        </>
    );
}

export default CreateNote;