import { useToast, Button} from '@chakra-ui/react'

export function ToastExample() {
    const toast = useToast()
    return (
      <Button
      colorScheme='blue' size='sm'
        onClick={() =>
          toast({
            title: 'Request Taken.',
            description: "Your request has been forwarded to the candidate.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Hire now
      </Button>
    )
  }