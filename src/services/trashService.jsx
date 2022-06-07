import fetchDataFromApi from "../shared/utilities/fetchDataFromApi"

const getTrashData = async () => {
    const response = await fetchDataFromApi({
        url: '/api/trash',
        method: 'get',
        propertyName: 'trash'
    })
    return response;
}

const transferNoteToTrash = async (noteInfo) => {

    const response = await fetchDataFromApi({
        url: `/api/notes/trash/${noteInfo._id}`,
        method: 'post',
        propertyName: 'trash',
        body: { noteInfo },
    })

    return response;
}

const restoreTrash = async (noteInfo) => {
    const response = await fetchDataFromApi({
        url: `/api/trash/restore/${noteInfo._id}`,
        method: 'post',
        propertyName: 'trash'
    })

    return response;
}

const deleteTrash = async (noteInfo) => {
    const response = await fetchDataFromApi({
        url: `/api/trash/delete/${noteInfo._id}`,
        method: 'delete',
        propertyName: 'trash'
    })

    return response;
}

export { getTrashData, transferNoteToTrash, restoreTrash, deleteTrash };