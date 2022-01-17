import withProtected from '../../hoc/withProtected'
import AuthLayout from '../../components/Layout/Authenticated'

const Profile = () => {
  return (
    <AuthLayout title="Profile">
      Profile
    </AuthLayout>
  )
}

export default withProtected(Profile)
