import * as Types from './../action-types'


let initState={
    currentLesson:0
}

export default function(state=initState,action){
    switch(action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson:action.val}
    }
    return state
}