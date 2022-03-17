import Benefits from "./Benefits/Benefits"
import Billing from "./Billing/Billing"
import Main from "./Main/Main"

const Home = () => {
    return (
        <div className="text-white">
            <Main />
            <Benefits />
            <Billing />
        </div>
    )
}

export default Home