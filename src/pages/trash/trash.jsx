import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TrashCard } from '../../components/trashCard/trashCard';
import { useTrash } from '../../context/trashContext/trashContext';
import '../trash/trash.css';

export const Trash = () => {
    const { trashList } = useTrash();
    return (
        <div className='layout-wrapper home-container'>
            <Navbar />
            <Sidebar />
            <main className='layout-main'>
                <div className='main-container'>
                    <div className="note-box">
                        <h1 className='note__heading'>Trash</h1>
                        <div className='notecard-wrapper'>
                            {
                                trashList.map(trashItem => <TrashCard key={trashItem._id} trashNote={trashItem} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}