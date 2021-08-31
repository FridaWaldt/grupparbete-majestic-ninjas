const updateState = (state) => {
    return {
        type: 'UPDATE',
        payload: state
    }
}

export default updateState;