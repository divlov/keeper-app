import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({ title: "", content: "" });
    const [hasFocus,setHasFocus]=useState(false);

    function handleTitleChange(event) {
        const { name, value: title } = event.target;
        setNote(function (prevValue) { return { ...prevValue, [name]: title } });
    }

    function handleContentChange(event) {
        const { name, value: content } = event.target;
        setNote(function (prevValue) { return { ...prevValue, [name]: content } });
    }

    function handleOnClick(event) {
        props.addNote(note.title, note.content);
        event.preventDefault();
        setNote({ title: "", content: "" });
    }

    function expand(){
        setHasFocus(!hasFocus);
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleOnClick}>
                {hasFocus && <input name="title" placeholder="Title" onChange={handleTitleChange} value={note.title} />}
                <textarea onClick={expand} name="content" placeholder="Take a note..." rows={hasFocus?"3":"1"} onChange={handleContentChange} value={note.content} />
                <Zoom in={hasFocus}><Fab ><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
