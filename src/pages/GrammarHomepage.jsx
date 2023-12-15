import React from 'react'
import Sidebar from '../components/Sidebar'
import ToggleButtons from '../components/ToggleButtons'

const GrammarHomepage = () => {
  return (
    <section className='flex flex-row'>
      <Sidebar />
      <section className="w-full"><ToggleButtons /></section>
    </section>
  )
}

export default GrammarHomepage