import { ArchiveCard } from '../../components/archiveCard/archiveCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import '../archive/archive.css';


export const Archive = () => {
    return (
        <div className='layout-wrapper home-container'>
            <Navbar />
            <Sidebar />
            <main className='layout-main'>

                <div className='main-container'>
                    <div className="note-box">
                        <h1 className='note__heading'>Archive</h1>
                        <div className='notecard-wrapper'>
                            <ArchiveCard />
                            <ArchiveCard />
                            <ArchiveCard />
                            <ArchiveCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}