import '../textEditor/textEditor.css';
import { IoColorPaletteOutline, IoAddCircleOutline, IoArchiveOutline, IoTrashOutline } from "react-icons/io5";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { useState } from 'react';
import { useNotes } from '../../context/notesContext/notesContext';

const initialNotedata = {
    color: '',
    editorContent: '',
    priorityDetails: '',
    tags: '',
    title: '',
    pinStatus: false,
    dateAddition: '',
}

export const TextEditor = () => {
    let [noteData, setNoteData] = useState(initialNotedata);
    const [showColorPallete, setShowColorPallete] = useState(false);
    const { addNewNote } = useNotes();

    const onChangeHandler = (e) => {
        setNoteData({ ...noteData, [e.target.name]: e.target.value });
    }

    const addColor = (inputColor) => {
        setNoteData({ ...noteData, color: inputColor });
    }

    const submit = (e) => {
        e.preventDefault();
        noteData = { ...noteData, dateAddition: new Date().toLocaleString() }
        addNewNote(noteData);
    }
    return (
        <div className='editor-container' style={{ backgroundColor: noteData.color }}>
            <input type="text" className='note-title' placeholder='Title' name='title' onChange={(e) => onChangeHandler(e)} />
            <textarea className='note-content' name='editorContent' role='textbox' cols='50' placeholder=' Write here ...' onChange={(e) => onChangeHandler(e)} >

            </textarea>
            <div className='note-specification'>
                <div className='tag-container'>
                    <label htmlFor="tags">Tag : </label>
                    <select id='tags' name='tags' onChange={(e) => onChangeHandler(e)}>
                        <option value="">Choose here</option>
                        <option value='event'>Event</option>
                        <option value="office">Office</option>
                        <option value="health">Health</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <div className='priority-container'>
                    <label htmlFor="priority">Priority :</label>
                    <select id='priority' name='priorityDetails' onChange={(e) => onChangeHandler(e)}>
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