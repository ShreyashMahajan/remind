import '../filterCard/filterCard.css';

export const FilterCard = () => {
    return (
        <div className='filter-container'>
            <div className='filter--title-box'>
                <h2 className='filter--title'>Filter</h2>
                <h3 className='filter--title'>Clear All</h3>
            </div>
            <div className="sortType-container">
                <div className='sort-box'>
                    <h3 className='sort--title'>Date</h3>
                    <div className='input-container'>
                        <input id='newest-date' type='radio' name='date' className='sort--type' />
                        <label htmlFor="newest-date">Newest</label>
                    </div>
                    <div className="input-container">
                        <input id='oldest-date' type='radio' name='date' className='sort--type' />
                        <label htmlFor="oldest-date">Oldest</label>
                    </div>
                </div>
                <div className="sort-box">
                    <h3 className="sort--title">Priority</h3>
                    <div className='input-container'>
                        <input id='low' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="low">Low</label>
                    </div>
                    <div className='input-container'>
                        <input id='medium' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className='input-container'>
                        <input id='high' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="high">High</label>
                    </div>
                </div>
                <div className="sort-box">
                    <h3 className="sort--title"> Tags</h3>
                    <div className='input-container'>
                        <input id='event' type="checkbox" className='sort--type' name='tags' />
                        <label htmlFor="event">event</label>
                    </div>
                    <div className='input-container'>
                        <input id='office' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="office">office</label>
                    </div>
                    <div className='input-container'>
                        <input id='health' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="health">health</label>
                    </div>
                    <div className='input-container'>
                        <input id='home' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="home">Home</label>
                    </div>
                    <div className='input-container'>
                        <input id='meeting' type="checkbox" className='sort--type' name='priority' />
                        <label htmlFor="meeting">Meeting</label>
                    </div>
                    <div className='input-container addTag-container'>
                        <input id='addTag' type="text" className='add-tag' name='addTag' />
                        <button className='btn-add'>Add</button>
                    </div>
                </div>
            </div>

        </div>
    )
}