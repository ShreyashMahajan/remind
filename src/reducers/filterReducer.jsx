

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_DATE':
            return { ...state, sortByDate: action.payload };
        case 'SORT_BY_PRIORITY':
            return { ...state, sortByPriority: action.payload };
        case 'CLEAR_ALL':
            return { ...state, sortByDate: '', sortByPriority: '' };
        default:
            return state;
    }
}