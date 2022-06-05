
const initialNote = {
    title: '',
    editorContent: '',
    color: '',
    priorityDetails: 'low',
    pinStatus: false,
    tags: [],
    creationDetails: '',
};

const notesReducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
        case 'UPDATE_TITLE':
            return { ...state, title: payload };
        case 'UPDATE_DESCRIPTION':
            return { ...state, editorContent: payload };
        case 'UPDATE_COLOR':
            return { ...state, color: payload };
        case 'UPDATE_PRIORITY':
            return { ...state, priorityDetails: payload };
        case 'UPDATE_PIN_STATUS':
            return { ...state, pinStatus: !state.pinStatus };
        case 'UPDATE_EXISTING_DATA':
            return { ...payload };
        case 'RESET_NOTE':
            return { ...initialNote };
        case 'ADD_TAG':
            return {
                ...state,
                tags: state.tags.includes(payload) ?
                    [...state.tags]
                    : [...state.tags, payload],
            };
        case 'REMOVE_TAG':
            return {
                ...state, tags: [...state.tags.filter((everyTag) => everyTag !== payload)
                ]
            }

        default:
            return state;

    }
};

export { notesReducer, initialNote };