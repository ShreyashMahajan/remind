import '../textEditor/textEditor.css';
import { IoColorPaletteOutline, IoAddCircleOutline, IoArchiveOutline, IoTrashOutline } from "react-icons/io5";
import { VscCircleLargeFilled } from "react-icons/vsc";

export const TextEditor = () => {
    return (
        <div className='editor-container'>
            <input type="text" className='note-title' placeholder='Title' name='noteInput' />
            <div className='note-content' name='noteContent' role='textbox' contentEditable >
                Write here ...
            </div>
            <div className='note-specification'>
                <div className='tag-container'>
                    <label htmlFor="tag">Tag : </label>
                    <select id='Tags' name='Tags'>
                        <option value='tagOne'>Tag One</option>
                        <option value="TagTwo">TagTwo</option>
                        <option value="TagTHree">TagThree</option>
                        <option value="TagFour">TagFour</option>
                    </select>
                </div>
                <div className='priority-container'>
                    <label htmlFor="priority">Priority :</label>
                    <select id='priority' name='priority'>
                        <option value='Value1'>Value1</option>
                        <option value="value2">value2</option>
                        <option value="value3">vaue3</option>
                        <option value="value4">value4</option>
                    </select>
                </div>
                <div className='label-icon-container'>
                    <IoColorPaletteOutline className='label-icon icon-color' />
                    {
                        false &&
                        <div className='color-pallete'>
                            <VscCircleLargeFilled className='color-icon color-blue' />
                            <VscCircleLargeFilled className='color-icon color-yellow' />
                            <VscCircleLargeFilled className='color-icon color-green' />
                            <VscCircleLargeFilled className='color-icon color-red' />
                        </div>
                    }
                    <IoAddCircleOutline className='label-icon' />
                </div>
            </div>
        </div>
    )
}