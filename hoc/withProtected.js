/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { useUser } from '../context/user'

const withProtected = (Pages) => {
  return (props) => {
    const router = useRouter()
    const user = useUser()
    const { uid } = user

    console.log({ uid })

    if (!uid) {
      router.replace('/')
      return <></>
    }

    return <Pages {...props}/>
  }
}

export default withProtected
