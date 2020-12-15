import { LOG_IN, LOG_OUT } from "../actionTypes";

const initialState = {
  userId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const UserLoggingIn = action.payload;
      console.log("User logged in with ID = ", UserLoggingIn);
      return { ...state, userId: UserLoggingIn };
    }
    case LOG_OUT: {
      return { ...state, userId: null };
    }
    default: {
      return state;
    }
  }
}
