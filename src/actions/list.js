export const addList = (item) => ({
    type: 'ADD',
    item
});

export const removeList = (listText) => ({
    type: 'REMOVE',
    listText
});

export const setList = () => ({
    type: 'SET'
});