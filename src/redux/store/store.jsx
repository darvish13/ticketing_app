import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

// export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const middlewares = composeWithDevTools(
    applyMiddleware(
        sagaMiddleware,
        // routerMiddleware(history)
    )
)

const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)

export default store