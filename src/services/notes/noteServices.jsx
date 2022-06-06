import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi"

const addNewNoteService = async (noteData) => {

    const response = await fetchDataFromApi({
        url: '/api/notes',
        method: 'post',
        body: { ...noteData },
        propertyName: 'note',
    })

    return response;
}

const getNotedataService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/notes',
        method: 'get',
        propertyName: 'note',
    });
    return response;
}

const updateNoteService = async (noteData) => {
    const response = await fetchDataFromApi({
        url: `/api/notes/${noteData._id}`,
        method: 'post',
        propertyName: 'update note',
        body: noteData,

    })
    return response;
}

const transferNoteToTrashService = async (noteData) => {
    const response = await fetchDataFromApi({
        url: `/api/notes/trash/${noteData._id}`,
        method: 'post',
        propertyName: 'note',
        body: { noteData },
    })

    return response;
}

export { addNewNoteService, getNotedataService, updateNoteService, transferNoteToTrashService };

