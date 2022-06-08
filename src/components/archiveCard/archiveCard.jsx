import './archiveCard.css';
import { BsPinAngle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineUnarchive } from "react-icons/md";
import { useArchive } from '../../context/archiveContext/archiveContext';

export const ArchiveCard = (props) => {
    const { archiveNote } = props;
    const { restoreArchive, deleteArchive } = useArchive();

    return (
        <div className='notecard-container'>
            <div className='notecard--heading'>
                <h1 className='notecard--title'>{archiveNote.title}</h1>
            </div>
            <p className='notecard--content'>{archiveNote.editorContent}</p>
            <div className='notecard-specification'>
                <span className='specification--item'>{archiveNote.tags}</span>
                <span className='specification--item'>{archiveNote.priorityDetails}</span>
            </div>
            <div className='notecard-section'>
                <p className='notecard--date'>Created on 01/02/2020</p>
                <div className="notecard--icons">
                    <MdOutlineUnarchive className='note--icon' title='unarchive' onClick={() => restoreArchive(archiveNote)} />
                    <MdDelete className='note--icon' title='delete' onClick={() => deleteArchive(archiveNote)} />
                </div>
            </div>
        </div>
    )
}