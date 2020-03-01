const initialState = {
  loggedIn: false
}

export const login = (trueFalse: boolean) => ({
  type: 'LOGIN',
  trueFalse
})

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        loggedIn: action.trueFalse
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
