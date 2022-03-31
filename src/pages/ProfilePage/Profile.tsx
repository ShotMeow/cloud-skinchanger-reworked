import { useState } from "react"
import { IUser } from "../../store/user.slice/user.interface"
import Admin from "./Admin/Admin"
import User from "./User/User"

const Profile = () => {
    const currentUser: IUser = JSON.parse(localStorage.getItem('current_user') || '{}')

    const [status, setStatus] = useState(currentUser?.status)

    return (
        <div>
            {status === 'user' ? <User user={currentUser} /> : <Admin user={currentUser} />}
        </div>
    )
}

export default Profile