import Container from '@mui/material/Container'
import withProtected from '../../hoc/withProtected'
import { useUser } from '../../context/user'

const Dashboard = () => {
  const user = useUser()
  const { email, uid } = user

  return (
    <Container>
      <div>
        <p>Email: <b>{email}</b></p>
        <br />
        <p>UID: <b>{uid}</b></p>
      </div>
    </Container>
  )
}

export default withProtected(Dashboard)
