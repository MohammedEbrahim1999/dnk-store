import React from 'react'
import Contactbanner from './ContactComponent/BannerContact/Contactbanner'
import Help from './ContactComponent/Help/Help'
import FormContact from './ContactComponent/FormContact/FormContact'
import Sale from '../Home Component/Sale/Sale'

const Contact = () => {
  return (
    <>
        <Contactbanner/>
        <Help/>
        <FormContact/>
        <Sale/>
    </>
  )
}

export default Contact
