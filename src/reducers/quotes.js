import { downvoteQuote } from "../actions/quotes";

export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      const newQuotes = state.filter(q => q.id !== action.quoteId)
      return newQuotes;
    case "UPVOTE_QUOTE": 
        let index = state.findIndex(q => q.id === action.quoteId)        
        const newQuote = {...state[index], 
          votes: state[index].votes + 1
        }
      return [
        ...state.slice(0, index),
        newQuote,
        ...state.slice(index + 1)
      ];
      case "DOWNVOTE_QUOTE": 
        index = state.findIndex(q => q.id === action.quoteId)        
        const downQuote = {...state[index]}
        if (downQuote.votes > 0){        
      return [
        ...state.slice(0, index),
        downQuote,
        ...state.slice(index - 1)
      ]
    }      
      default:  
        return state;
  }
}
