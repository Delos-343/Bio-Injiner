import React, { useState } from 'react'
import './App.css'
import { Modal, Navbar, TableList } from './components'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [modalMode, setmodalMode] = useState('add');

  const handleOpen = (mode) => {

    setIsOpen(true);

  }

  const handleSubmit = () => {

    if(modalMode === 'add') {

      console.log('Add to Modal');

    } else {

      console.log('Edit Modal');

    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList handleOpen={handleOpen} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default App;
