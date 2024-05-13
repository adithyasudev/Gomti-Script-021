import {
  Drawer,
  DrawerBody,
  Button,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

  import { useDispatch, useSelector } from "react-redux"
import AdminDashboard from '../Pages/AdminDashboard'
import { ADMIN_LOGOUT, LOGOUT_REQUEST } from "../redux/reducers";
import UserDasbord from './UserDasbord';
import { Store } from "../redux/types";

export function Sidebar() {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const adminLoggedin = useSelector((state: Store) => state.admin.isAuthenticated)
    const userloggedin = useSelector((state: Store) => state.user.isAuthenticated)
    const dispatch = useDispatch();
    const handleClick = () => {
      onOpen()
    }
  
 
  
    return (
      <>
      
          <Button
            onClick={() => handleClick()}
         
            m={4}
          >DashBoard</Button>
      
  
        <Drawer onClose={onClose} isOpen={isOpen} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
             {adminLoggedin&&(<AdminDashboard/>)}  
             {userloggedin && (<UserDasbord />)}
            </DrawerBody>

            <DrawerFooter>
            <button  onClick={()=>{dispatch({type:LOGOUT_REQUEST});dispatch({type:ADMIN_LOGOUT})}}>Logout</button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

