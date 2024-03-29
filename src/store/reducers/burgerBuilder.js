import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients:null,
    totalPrice: 4,
    error : false
}

const INGREDIENT_PRICES = {
    meat: 0.6,
    salad: 0.3,
    bacon: 0.3,
    cheese: 0.5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice+INGREDIENT_PRICES[action.ingredientName],
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice-INGREDIENT_PRICES[action.ingredientName],
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients : action.ingredients,
                error : false,
                totalPrice : 4
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error : true
            }
        default : return state
    }
}

export default reducer