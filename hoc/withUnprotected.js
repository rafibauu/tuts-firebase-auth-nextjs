/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { useUser } from '../context/user'

const withUnprotected = (Pages) => {
  return (props) => {
    const router = useRouter()
    const user = useUser()
    const { uid } = user

    if (uid) {
      router.replace('/dashboard')
      return <></>
    }

    return <Pages {...props}/>
  }
}

export default withUnprotected
