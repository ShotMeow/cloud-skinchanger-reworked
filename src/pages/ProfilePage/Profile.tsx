import { useState } from "react"
import { useAppSelector } from "../../store/hooks"
import Admin from "./Admin/Admin"
import User from "./User/User"

const Profile = () => {
    const users = useAppSelector(state => state.users.users)
    const currentUser = users.find(user => user.token === localStorage.getItem('token'))

    const [status, setStatus] = useState(currentUser?.status)

    return (
        <div>
            {status === 'user' ? <User user={currentUser} /> : <Admin user={currentUser} />}
        </div>
    )
}

export default Profile