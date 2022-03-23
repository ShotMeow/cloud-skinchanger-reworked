import { Calculator } from "./Calculator/Calculator"
import Tariffs from "./Tariffs/Tariffs"

const Billing = () => {
    return (
        <div>
            <Tariffs />
            <div className="bg-[#020202]">
                <Calculator />
            </div>
        </div>
    )
}

export default Billing