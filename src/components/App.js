import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Calculator from './Calculator';
import store from '../store/index';
const App = () => (
  <div>
    <Calculator store={store} />
  </div>
)

export default App
