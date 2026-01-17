import type {
  ProductAction,
  ProductState,
} from "../context/product-context/product-context.types";

export function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        card: [...state.card, action.payload]
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        card: state.card.filter((product) => product.id != action.payload.id)
      }
    case "TOGGLE_WISHlIST":
      if (state.wishList.find((product) => product.id == action.payload.id)) {
        return {
          ...state,
          wishList: state.wishList.filter((product) => product.id != action.payload.id)
        }
      } else {
        return {
          ...state,
          wishList: [...state.wishList, action.payload]
        }
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload
      }
    case 'SET_MENU_OPEN':
      return {
        ...state,
        isMenuOpen: action.payload
      }
    default:
      return state;
  }
}
