import React, { useState } from "react";
import Header from "./Header"
import Note from "./Note"
import CreateArea from "./CreateArea"
import Footer from "./Footer"



function App(){

    const [notes,setNotes]=useState([]);

    function addNote(title,content){
        setNotes((prevNotes) => {
            return [...prevNotes,{title:title,content:content}];
        })
    }

    function deleteNote(ind){
        setNotes((prevNotes) => {
            prevNotes.splice(ind,1);
            return [...prevNotes];
        })
    }

    return <div>
        <Header/>
        <CreateArea addNote={addNote}/>
        {notes.map((note,index) => (
            <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
            ))}
        <Footer />
    </div>
}

export default App;