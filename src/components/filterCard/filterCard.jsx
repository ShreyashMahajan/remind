import { useFilter } from '../../context/filterContext/filterContext';
import '../filterCard/filterCard.css';

export const FilterCard = () => {
    const { dispatch, state } = useFilter();
    return (
        <div className='filter-container'>
            <div className='filter--title-box'>
                <h2 className='filter--title'>Filter</h2>
                <h3 className='filter--title' onClick={() => dispatch({ type: 'CLEAR_ALL' })}>Clear All</h3>
            </div>
            <div className="sortType-container">
                <div className='sort-box'>
                    <h3 className='sort--title'>Date</h3>
                    <div className='input-container'>
                        <input id='newest-date' type='radio' name='date' checked={state.sortByDate === 'NEWEST_FIRST'} className='sort--type' onClick={() => dispatch({ type: 'SORT_BY_DATE', payload: 'NEWEST_FIRST' })} />
                        <label htmlFor="newest-date">Newest</label>
                    </div>
                    <div className="input-container">
                        <input id='oldest-date' type='radio' name='date' checked={state.sortByDate === 'OLDEST_FIRST'} className='sort--type' onClick={() => dispatch({ type: 'SORT_BY_DATE', payload: 'OLDEST_FIRST' })} />
                        <label htmlFor="oldest-date">Oldest</label>
                    </div>
                </div>
                <div className="sort-box">
                    <h3 className="sort--title">Priority</h3>
                    <div className='input-container'>
                        <input id='low' type="radio" className='sort--type' checked={state.sortByPriority === 'low'} name='priority' onClick={() => dispatch({ type: 'SORT_BY_PRIORITY', payload: 'low' })} />
                        <label htmlFor="low">Low</label>
                    </div>
                    <div className='input-container'>
                        <input id='medium' type="radio" className='sort--type' checked={state.sortByPriority === 'medium'} name='priority' onClick={() => dispatch({ type: 'SORT_BY_PRIORITY', payload: 'medium' })} />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className='input-container'>
                        <input id='high' type="radio" className='sort--type' checked={state.sortByPriority === 'high'} name='priority' onClick={() => dispatch({ type: 'SORT_BY_PRIORITY', payload: 'high' })} />
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