import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './SRC/Counter'
import Reducer from './SRC/Reducer'

const store = createStore(Reducer)
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;