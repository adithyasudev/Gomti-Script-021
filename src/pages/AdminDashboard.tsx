
import { Stack } from '@chakra-ui/react'
import AdminNav from '../Components/AdminNav'
import Adminbody from '../Components/Adminbody'

const AdminDashboard = () => {
  return (
    <>
    <Stack spacing={2}>
    <AdminNav/>
    <Adminbody/>
    </Stack>
    </>
  )
}

export default AdminDashboard