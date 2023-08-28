import './App.css'

import Form from './Components/Form/Form'
import TableCustom from './Components/TableCustom/TableCustom'


import { Provider } from 'react-redux'
import { contactStore } from './redux'

function App() {

  return (
    <>
      <Provider store={contactStore}>
        <Form />
        <TableCustom />
      </Provider>
    </>
  )
}

export default App
