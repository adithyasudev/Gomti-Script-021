import { AtSignIcon, BellIcon, EditIcon, MoonIcon, PhoneIcon ,ChatIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const UserDasbord = () => {
  return (
    <>
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><AtSignIcon />Profile</h2>
    <hr  />
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><EditIcon />Resume</h2>
    <hr />
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><MoonIcon /> Theme</h2>
    <hr />
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><PhoneIcon /> Call our executive</h2>
    <hr />
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><BellIcon /> Notification</h2>
    <hr />
    <h2 style={{display:'flex',alignItems:'center', gap:'5px',fontSize:'25px'}}><ChatIcon /> Messages</h2>
    <hr />
</>
  )
}

export default UserDasbord
