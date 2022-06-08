import { useState } from 'react';
import { IoColorPaletteOutline, IoAddCircleOutline, IoArchiveOutline, IoTrashOutline } from "react-icons/io5";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { useNotes } from '../../context/notesContext/notesContext';
import '../updateNoteEditor/updateNoteEditor.css';

export const UpdateNoteEditor = (props) => {
    const { currentNote, setShowEditor } = props;
    const [showColorPallete, setShowColorPallete] = useState(false);
    const [updateNote, setUpdateNote] = useState(currentNote);
    const { updateNoteInfo } = useNotes();

    const onChangeHandler = (e) => {
        setUpdateNote({ ...updateNote, [e.target.name]: e.target.value });
    }

    const addColor = (inputColor) => {
        setUpdateNote({ ...updateNote, color: inputColor });
    }

    const submit = (e) => {
        e.preventDefault();
        updateNoteInfo(updateNote);
        setShowEditor(false);
    }

    return (
        <div className='editor-container' >
            <input type="text" className='note-title' placeholder='Title' name='title' defaultValue={updateNote.title} onChange={(e) => onChangeHandler(e)} />
            <textarea className='note-content' name='editorContent' role='textbox' cols='50' defaultValue={updateNote.editorContent} onChange={(e) => onChangeHandler(e)} >

            </textarea>
            <div className='note-specification'>
                <div className='tag-container'>
                    <label htmlFor="tags">Tag : </label>
                    <select id='tags' name='tags' onChange={(e) => onChangeHandler(e)} defaultValue={updateNote.tags} >
                        <option value="">Choose here</option>
                        <option value='event'>Event</option>
                        <option value="office">Office</option>
                        <option value="health">Health</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <div className='priority-container'>
                    <label htmlFor="priority">Priority :</label>
                    <select id='priority' name='priorityDetails' onChange={(e) => onChangeHandler(e)} defaultValue={updateNote.priorityDetails} >
                        <option value="">Choose here</option>
                        <option value='low'>Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className='label-icon-container'>
                    <IoColorPaletteOutline className='label-icon icon-color' onClick={() => setShowColorPallete(true)} />
                    {
                        showColorPallete &&
                        <div className='color-pallete'>
                            <span name='color' value='#f87171' onClick={(e) => { addColor('#f87171'), setShowColorPallete(false) }}>
                                <VscCircleLargeFilled className='color-icon color-red' />
                            </span>
                            <span name='color' value='#fde047' onClick={(e) => { addColor('#fde047'), setShowColorPallete(false) }}>
                                <VscCircleLargeFilled className='color-icon color-yellow' />
                            </span>
                            <span name='color' value='#86efac' onClick={(e) => { addColor('#86efac'), setShowColorPallete(false) }}>
                                <VscCircleLargeFilled className='color-icon color-green' />
                            </span>
                            <span name='color' value='#67e8f9' onClick={(e) => { addColor('#67e8f9'), setShowColorPallete(false) }}>
                                <VscCircleLargeFilled className='color-icon color-sky' />
                            </span>


                        </div>

                    }
                    <IoAddCircleOutline className='label-icon' onClick={(e) => submit(e)} />
                </div>
            </div>
        </div>
    )
}