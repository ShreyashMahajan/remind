import '../noteCard/noteCard.css';
import { useState } from 'react'
import { BsPinAngle, BsTrash } from "react-icons/bs";
import { FiEdit, FiArchive } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNotes } from '../../context/notesContext/notesContext';
import { useTrash } from '../../context/trashContext/trashContext';
import { useArchive } from '../../context/archiveContext/archiveContext';
import { UpdateNoteEditor } from '../updateNoteEditor/updateNoteEditor';



export const NoteCard = (props) => {
    const { noteInfo } = props;
    const { updateNotePinStatus } = useNotes();
    const { transferToTrash } = useTrash();
    const { addNoteToArchive } = useArchive();
    const [showEditor, setShowEditor] = useState(false);
    return (
        <>
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
                    <p className='notecard--date'>Created on {noteInfo.dateAddition}</p>
                    <div className="notecard--icons">
                        <MdDelete className='note--icon' title='trash' onClick={() => transferToTrash(noteInfo)} />
                        <FiEdit className='note--icon' title='edit' onClick={() => setShowEditor(!showEditor)} />
                        <FiArchive className='note--icon' title='archive' onClick={() => addNoteToArchive(noteInfo)} />
                    </div>
                </div>
            </div>
            {
                showEditor &&
                <div className='modal-back-container'>
                    <div className='modal-container'>
                        <UpdateNoteEditor className='textEditor' setShowEditor={setShowEditor} currentNote={noteInfo} />
                    </div>
                </div>
            }
        </>
    )
}