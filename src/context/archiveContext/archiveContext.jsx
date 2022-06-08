import { addToArchiveServie, getArchiveDataService, restoreArchiveService } from "../../services/archiveServices";
import { getNotedataService } from "../../services/notes/noteServices";
import { useAuth } from "../authContext/authContext";
import { useNotes } from "../notesContext/notesContext";

const { createContext, useContext, useReducer, useState, useEffect } = require("react");


const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {

    const [archiveList, setArchiveList] = useState([]);
    const { isUserLoggedIn } = useAuth();
    const { setNoteList } = useNotes();


    useEffect(() => {
        if (isUserLoggedIn) {
            (async () => {
                try {
                    const data = await getArchiveDataService();
                    setArchiveList(data.data.archives);

                }
                catch (error) {
                    console.error('error occured while getting archive list', error);
                }
            })()
        }
        else {
            setArchiveList([])
        }
    }, [isUserLoggedIn]);


    const addNoteToArchive = async (noteInfo) => {
        try {

            const response = await addToArchiveServie(noteInfo);
            setArchiveList(response.data.archives);
            setNoteList(response.data.notes);

        }
        catch (error) {
            console.error('error while moving note to archive', error);
        }
    }

    const restoreArchive = async (noteInfo) => {
        try {
            const response = await restoreArchiveService(noteInfo);
            setArchiveList(response.data.archives);
            setNoteList(response.data.notes);
        }
        catch (error) {
            console.error('error while restoring note to archive', error);
        }
    }

    const deleteArchive = async (noteInfo) => {
        try {
            const response = await restoreArchiveService(noteInfo);
            setArchiveList(response.data.archives);
        }
        catch (error) {
            console.error('error while deleting archive', error);
        }
    }



    return (
        <ArchiveContext.Provider value={{
            archiveList,
            addNoteToArchive,
            restoreArchive,
            deleteArchive,
            setArchiveList,
        }}>
            {children}
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };