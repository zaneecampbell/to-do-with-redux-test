export const addList = (item) => ({
    type: 'ADD',
    item
});

export const removeList = (item) => ({
    type: 'REMOVE',
    item
});

export const setList = () => ({
    type: 'SET'
});