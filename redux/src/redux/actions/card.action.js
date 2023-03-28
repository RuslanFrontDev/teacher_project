export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}

export const deleteCart = (id) => {
    return {
        type: 'DELETE_CART',
        payload: id
    }
}
