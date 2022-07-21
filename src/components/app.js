import { h } from 'preact'
import { Provider } from 'react-redux'
import store from '../app/store'
import Counter from './counter'


const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello Preact</h1>
    </div>
  <div>
    <Counter />
  </div>
  </Provider>
)

export default App
