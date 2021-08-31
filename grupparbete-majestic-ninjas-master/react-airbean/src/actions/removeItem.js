const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}

export default removeItem;