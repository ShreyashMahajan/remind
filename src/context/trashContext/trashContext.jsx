import { deleteTrash, getTrashData, restoreTrash, transferNoteToTrash } from "../../services/trashService";
import { useAuth } from "../authContext/authContext";
import { useNotes } from "../notesContext/notesContext";

const { createContext, useContext, useState, useEffect } = require("react");


const TrashContext = createContext();

const TrashProvider = ({ children }) => {
    const { isUserLoggedIn } = useAuth();
    const { setNoteList } = useNotes();
    const [trashList, setTrashList] = useState([]);

    useEffect(() => {
        (async () => {
            if (isUserLoggedIn) {
                try {
                    const response = await getTrashData();
                    setTrashList(response.data.trash);
                } catch (error) {
                    console.error('error occurred while getting trash list', error);
                }
            }
            else {
                setTrashList([])
            }
        })();
    }, [isUserLoggedIn])

    const transferToTrash = async (noteInfo) => {
        try {
            const response = await transferNoteToTrash(noteInfo);
            setNoteList(response.data.notes);
            setTrashList(response.data.trash);
        }
        catch (error) {
            console.error('error occurred while moving to trash', error);
        }
    }

    const restoreTrashItem = async (noteInfo) => {
        try {
            const response = await restoreTrash(noteInfo);
            setNoteList(response.data.notes);
            setTrashList(response.data.trash);

        }
        catch (error) {
            console.error('error occurred while restoring to trash', error);
        }
    }

    const deleteTrashItem = async (noteInfo) => {
        try {
            const response = await deleteTrash(noteInfo);
            setTrashList(response.data.trash);
        }
        catch (error) {
            console.error('error occurred while deleting trash', error);
        }
    }



    return (
        <TrashContext.Provider value={{
            trashList,
            setTrashList,
            transferToTrash,
            restoreTrashItem,
            deleteTrashItem
        }}>
            {children}
        </TrashContext.Provider>
    )
}

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };