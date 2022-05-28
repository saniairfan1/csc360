     
     //current state, and action
                //action - js object, type and whatever is typed and then whats passed
function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      // always have a default, that means someone we dont have logic for action, return og state
      default:
        return state;
    }
}

function todoReducer(state, action){
  //create action, logout, return []
    switch(action.type){
      case 'CREATE_TODO':
        //logic for creating todo
        //need to accept title and desc 
         const newTodo = {
           title: action.title,
           desc: action.desc,
           dateCreated: action.dateCreated,
           dateCompleted: action.dateCompleted,
           complete: action.complete,
         };
         return [...state,newTodo];
      case 'TOGGLE_TODO':
        let completedDate;
        if (action.complete) {
          completedDate = action.dateCompleted;
        }
        else{
          completedDate = null;
        }
        const updatedTodo = {
           title: action.title,
           desc: action.desc,
           dateCreated: action.dateCreated,
           dateCompleted: completedDate,
           complete: action.complete.toString(),
        }
        const currState = state;
        currState[action.index] = updatedTodo;
        return currState;
      case 'DELETE_TODO':
        //look through current state and remove the todo thats passed
        return state.filter((todo,index) => index !== action.index)
      case 'FETCH_TODOS':
        return action.todos;
        default:
        return state;
    }
}

export default function appReducer (state, action){
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}