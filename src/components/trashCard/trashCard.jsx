import '../trashCard/trashCard.css';
import { BsPinAngle } from "react-icons/bs";
import { MdDelete, MdRestore } from "react-icons/md";
import { useTrash } from '../../context/trashContext/trashContext';


export const TrashCard = (props) => {
    const { trashNote } = props;
    const { restoreTrashItem, deleteTrashItem } = useTrash();;
    return (
        <div className='notecard-container'>
            <div className='notecard--heading'>
                <h1 className='notecard--title'>{trashNote.title}</h1>

            </div>
            <p className='notecard--content'>{trashNote.editorContent}</p>
            <div className='notecard-specification'>
                <span className='specification--item'>{trashNote.tags}</span>
                <span className='specification--item'>{trashNote.priorityDetails}</span>
            </div>
            <div className='notecard-section'>
                <p className='notecard--date'>Created on 01/02/2020</p>
                <div className="notecard--icons">
                    <MdRestore className='note--icon' title='restore' onClick={() => restoreTrashItem(trashNote)} />
                    <MdDelete className='note--icon' title='delete' onClick={() => deleteTrashItem(trashNote)} />
                </div>
            </div>
        </div>
    )
}