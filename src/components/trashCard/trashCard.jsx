import '../trashCard/trashCard.css';
import { BsPinAngle } from "react-icons/bs";
import { MdDelete, MdRestore } from "react-icons/md";

export const TrashCard = () => {
    return (
        <div className='notecard-container'>
            <div className='notecard--heading'>
                <h1 className='notecard--title'>Title of Card</h1>
                <BsPinAngle className='note--icon' title='pin' />
            </div>
            <p className='notecard--content'>This is content</p>
            <div className='notecard-specification'>
                <span className='specification--item'>Home</span>
                <span className='specification--item'>Low</span>
            </div>
            <div className='notecard-section'>
                <p className='notecard--date'>Created on 01/02/2020</p>
                <div className="notecard--icons">
                    <MdRestore className='note--icon' title='restore' />
                    <MdDelete className='note--icon' title='delete' />
                </div>
            </div>
        </div>
    )
}