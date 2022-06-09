const filterByDate = (noteDataList, type) => {
    const newNoteList = [...noteDataList];

    if (newNoteList.length !== 0) {
        switch (type) {
            case 'OLDEST_FIRST':
                return newNoteList.sort((dateOne, dateSecond) => {
                    const finalDate = (new Date(dateOne.dateAddition)).getTime() - (new Date(dateSecond.dateAddition)).getTime();
                    return finalDate;
                });
            case 'NEWEST_FIRST':
                return newNoteList.sort((dateOne, dateSecond) => (new Date(dateSecond.dateAddition)).getTime() - (new Date(dateOne.dateAddition)).getTime());
            default:
                return newNoteList;
        }
    }
    else {
        return newNoteList
    }
}

const filterByPriority = (noteDataList, priorityType) => {
    if (priorityType === '') {
        return noteDataList
    };
    if (noteDataList.length !== 0) {
        return noteDataList.filter(item => item.priorityDetails === priorityType)
    } else {
        return noteDataList;
    }
}

export { filterByDate, filterByPriority };