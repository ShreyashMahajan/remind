import fetchDataFromApi from "../shared/utilities/fetchDataFromApi";

const getArchiveDataService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/archives',
        method: 'get',
        propertyName: 'archive',
    })
    return response;
}

const addToArchiveServie = async (note) => {
    const response = await fetchDataFromApi({
        url: `/api/notes/archives/${note._id}`,
        method: 'post',
        propertyName: 'archive',
        body: { note }
    })

    return response;
}

const restoreArchiveService = async (note) => {
    const response = await fetchDataFromApi({
        url: `/api/archives/restore/${note._id}`,
        method: 'post',
        propertyName: 'archive',
    })

    return response;
}

const deleteArchiveService = async (note) => {
    const response = await fetchDataFromApi({
        url: `/api/archives/delete/${note._id}`,
        method: 'delete',
        propertyName: 'archive',
    })
}

export { getArchiveDataService, addToArchiveServie, restoreArchiveService, deleteArchiveService }