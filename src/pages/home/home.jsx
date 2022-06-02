import { ArchiveCard } from '../../components/archiveCard/archiveCard';
import { Navbar } from '../../components/navbar/navbar';
import { NoteCard } from '../../components/noteCard/noteCard';
import { PinnedCard } from '../../components/pinnedCard/pinnedCard';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TextEditor } from '../../components/textEditor/textEditor';
import { TrashCard } from '../../components/trashCard/trashCard';
import '../home/home.css';




export const Home = () => {
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
                            <NoteCard />
                            <NoteCard />
                            <NoteCard />
                            <NoteCard />

                        </div>
                    </div>
                    <div className="note-box">
                        <h1 className='note__heading'>Pinned Notes</h1>
                        <div className='notecard-wrapper'>
                            <PinnedCard />
                            <ArchiveCard />
                            <TrashCard />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}