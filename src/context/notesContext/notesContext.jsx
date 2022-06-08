import { createContext, useContext, useEffect, useState } from "react";
import { addNewNoteService, getNotedataService, updateNoteService } from "../../services/notes/noteServices";
import { useAuth } from "../authContext/authContext";



const NotesContext = createContext();

const NoteProvider = ({ children }) => {

    const { isUserLoggedIn } = useAuth();
    const [noteList, setNoteList] = useState([]);
    const [noteTags, setNoteTags] = useState([]);



    useEffect(() => {
        if (isUserLoggedIn) {
            (async () => {
                try {
                    const data = await getNotedataService();
                    setNoteList(data.data.notes);
                    noteDispatch({ type: 'UPDATE_EXISTING_DATA', payload: data.data.notes });
                }
                catch (error) {
                    console.error('error from notes api', error);
                }
            })();
        } else {
            setNoteList([]);
        }
    }, []);



    const addNewNote = async (noteInfo) => {
        try {
            const data = await addNewNoteService(noteInfo);
            setNoteList(data.data.notes);
        }
        catch (error) {
            console.error(
                'error while adding note', note
            )
        }
    }

    const updateNoteInfo = async (NoteData) => {
        try {
            const data = await updateNoteService(NoteData);
            setNoteList(data.data.notes);
        }
        catch (error) {
            console.error(
                'error while updating note', error
            )
        }
    }

    const updateNotePinStatus = async (noteData) => {
        try {
            const data = await updateNoteService({
                ...noteData, pinStatus: !noteData.pinStatus
            });
            setNoteList(data.data.notes);

        }
        catch (error) {
            console.error(
                'error while moving note to pinned', error
            )
        }
    }


    return (
        <NotesContext.Provider value={{
            updateNotePinStatus,
            addNewNote,
            updateNoteInfo,
            noteList,
            setNoteList,
            noteTags,
            setNoteTags,

        }} >
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);


export { NoteProvider, useNotes };