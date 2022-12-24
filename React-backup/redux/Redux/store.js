import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore} from 'redux'
import {messageReducer} from './message/message.reducer'
let store = createStore(messageReducer,composeWithDevTools())
export{store}