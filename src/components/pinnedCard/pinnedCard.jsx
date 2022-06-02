import '../pinnedCard/pinnedCard.css';
import { BsPinAngleFill } from "react-icons/bs";
import { FiEdit, FiArchive } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export const PinnedCard = () => {
    return (
        <div className='notecard-container'>
            <div className='notecard--heading'>
                <h1 className='notecard--title'>Title of Card</h1>
                <BsPinAngleFill className='note--icon' />
            </div>
            <p className='notecard--content'>This is content</p>
            <div className='notecard-specification'>
                <span className='specification--item'>Home</span>
                <span className='specification--item'>Low</span>
            </div>
            <div className='notecard-section'>
                <p className='notecard--date'>Created on 01/02/2020</p>
                <div className="notecard--icons">
                    <FiEdit className='note--icon' />
                    <FiArchive className='note--icon' />
                    <MdDelete className='note--icon' />
                </div>
            </div>
        </div>
    )
}