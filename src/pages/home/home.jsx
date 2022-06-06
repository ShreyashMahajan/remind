import { Navbar } from '../../components/navbar/navbar';
import { NoteCard } from '../../components/noteCard/noteCard';
import { PinnedCard } from '../../components/pinnedCard/pinnedCard';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TextEditor } from '../../components/textEditor/textEditor';
import { useNotes } from '../../context/notesContext/notesContext';
import '../home/home.css';




export const Home = () => {

    const { noteList } = useNotes();

    return (
        <div className='layout-wrapper home-container'>
            <Navbar />
            <Sidebar showFilter={true} />
            <main className='layout-main'>

                <div className='main-container'>
                    <TextEditor />
                    <div className="note-box">
                        <h1 className='note__heading'>Notes</h1>
                        <div className='notecard-wrapper'>
                            {
                                noteList.map(noteItem => !noteItem.pinStatus && <NoteCard key={noteItem._id} noteInfo={noteItem} />)
                            }

                        </div>
                    </div>
                    <div className="note-box">
                        <h1 className='note__heading'>Pinned Notes</h1>
                        <div className='notecard-wrapper'>
                            {
                                noteList.map(noteItem => noteItem.pinStatus && <PinnedCard key={noteItem._id} noteInfo={noteItem} />)
                            }

                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}