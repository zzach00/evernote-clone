import styles from '../../styles/evernote.module.css'
import { useState, useEffect } from 'react';
import { app, database } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function NoteOperations() {
    useEffect(()=>{
        getNotes();
    }, []);

    const [isInputVisible, setInputVisible] = useState(false);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }
    const [noteTitle, setNoteTitle] = useState('');

    const dbInstance = collection(database, 'notes');
    const saveNote = () => {
        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc
        })
        .then(() =>{
            setNoteDesc(''),
            setNoteTitle(''),
            getNotes();
        })
    }
    const [noteDesc, setNoteDesc] = useState('')
    const addDesc = (value) => {
        setNoteDesc(value);
    }

    const [notesArray, setNotesArray] = useState([]);
    const getNotes = () => {
        getDocs(dbInstance)
        .then((data) => {
            setNotesArray(data.docs.map((item) => {
                return{...item.data(), id: item.id}
            }));
        })
    }
    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    onClick={inputToggle}
                    className={styles.button}>
                    Add a New Note
                </button>
            </div>

            {isInputVisible ? (
                <div className={styles.inputContainer}>
                    <input 
                        className={styles.input} 
                        placeholder='Enter the Title..' 
                        onChange={(e) => {
                            setNoteTitle(e.target.value)
                        }}
                        value ={noteTitle}
                    />
                </div>
            ) : (
                <></>
            )}

            <div className={styles.ReactQuill}>
                <ReactQuill 
                    onChange={addDesc}
                    value = {noteDesc}
                />
            </div>

            <button
                onClick={saveNote}
                className={styles.saveBtn}>
                Save Note
            </button>

            <div>
                {notesArray.map((note) =>{
                    return(
                        <div className={styles.notesInner}>
                            <h1>{note.noteTitle}</h1>
                            <div dangerouslySetInnerHTML={{__html: note.noteDesc}}></div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}