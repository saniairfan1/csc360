                //current state, and action
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
         return [newTodo,...state];
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