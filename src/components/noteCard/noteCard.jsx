import '../noteCard/noteCard.css';
import { BsPinAngle, BsTrash } from "react-icons/bs";
import { FiEdit, FiArchive } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNotes } from '../../context/notesContext/notesContext';
import { useTrash } from '../../context/trashContext/trashContext';
import { useArchive } from '../../context/archiveContext/archiveContext';



export const NoteCard = (props) => {
    const { noteInfo } = props;
    const { updateNotePinStatus, moveNoteToTrash, updateNoteInfo } = useNotes();
    const { transferToTrash } = useTrash();
    const { addNoteToArchive } = useArchive();
    return (
        <div className='notecard-container' style={{ backgroundColor: noteInfo.color }}>
            <div className='notecard--heading'>
                <h1 className='notecard--title'>{noteInfo.title}</h1>
                <BsPinAngle className='note--icon' onClick={() => updateNotePinStatus(noteInfo)} />
            </div>
            <p className='notecard--content'>{noteInfo.editorContent}</p>
            <div className='notecard-specification'>
                <span className='specification--item'>{noteInfo.tags}</span>
                <span className='specification--item'>{noteInfo.priorityDetails}</span>
            </div>
            <div className='notecard-section'>
                <p className='notecard--date'>Created on 01/02/2020</p>
                <div className="notecard--icons">
                    <MdDelete className='note--icon' title='trash' onClick={() => transferToTrash(noteInfo)} />
                    {/* <BsTrash className='note--icon' title='trash' onClick={() => transferToTrash(noteInfo)} /> */}
                    <FiEdit className='note--icon' title='edit' />
                    <FiArchive className='note--icon' title='archive' onClick={() => addNoteToArchive(noteInfo)} />
                    {/* <MdDelete className='note--icon' title='delete' onClick={() => moveNoteToTrash(noteInfo)} /> */}
                </div>
            </div>
        </div>
    )
}