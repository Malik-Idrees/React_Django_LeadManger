import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";

const initialState = {
  leads: [],
};

export default function (state = initialState, action) {
  console.log("lead reducer");
  switch (action.type) {
    case GET_LEADS:
      return {
        /* without spread operator ...state states will be overwritten*/
        ...state,

        /* we will receive this from action */
        leads: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    default:
      return state;
  }
}
