import { useEffect, useState } from 'react'
import { app, database } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { async } from '@firebase/util';

export default function NoteDetails ({IDe}) {

    const dbInstance = collection(database, 'notes');

    const [singleNote, setSingleNote] = useState({})
    const getSingleNote = async () => {
        if (IDe) {
            const singleNotee = doc(database, 'notes', IDe);
            const data = await getDoc(singleNotee);
            setSingleNote({...data.data(), id: data.id});
        }
    }

    useEffect(() => {
        getSingleNote();
    }, [IDe])

    const getNotes = () => {
        getDocs(dbInstance)
            .then((data) => {
                setSingleNote(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                })[0]);
            })
    }

    useEffect(() => {
        getNotes();
    }, [])


    return(
        <>
            <h2>{singleNote.noteTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}></div>
        </>
    )
}