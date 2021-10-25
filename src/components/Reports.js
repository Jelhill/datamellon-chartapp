import { useSelector } from "react-redux"
import { thousandseparator } from "../helper/helper";
export default function Reports() {

    const { sales, quantity, profit } = useSelector((state) => state).reducer


    return (
        <div className="reports-area">
            <div className="report-box">
                <p><strong>{thousandseparator(sales)}</strong></p>
                <p>TOTAL SALES</p>
            </div>
            <div className="report-box">
                <p><strong>{thousandseparator(quantity)}</strong></p>
                <p>QUANTITY SOLD</p>
            </div>
            <div className="report-box">
                <p><strong>{thousandseparator(profit)}</strong></p>
                <p>PROFIT</p>
            </div>
        </div>
    )
}
