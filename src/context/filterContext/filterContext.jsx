import { createContext } from 'react';
import { useContext, useReducer } from 'react';
import { filterReducer } from '../../reducers/filterReducer';
import { filterByDate, filterByPriority } from '../../services/filterServices';
import { useNotes } from '../notesContext/notesContext';


const FilterContext = createContext();

const initialState = {
    sortByDate: '',
    sortByPriority: '',
}

const FilterProvider = ({ children }) => {
    const { noteList } = useNotes();
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const filteredNoteList = filterByPriority(filterByDate(noteList, state.sortByDate), state.sortByPriority)

    return (
        <FilterContext.Provider value={{ state, dispatch, filteredNoteList }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };