import './App.css';
import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Loader from "react-loader-spinner";
import SearchArea from "./components/SearchArea";
import { getStubs } from "./redux/actions/actions"
import Reports from "./components/Reports";
import Graphs from "./components/Graphs";

function App(props) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async function fetchData() {
      const fetchStore = await getStubs()
      dispatch(fetchStore)
    })()
    // eslint-disable-next-line
  }, [])

  const stubs = useSelector((state) => state)
  const { data } = stubs.reducer
  

  const mapStubs = stubs.reducer.data.map((stub, index) => (
    <tr key={index}>
      <td>{stub["Customer Name"]}</td>
      {/* <td>{stub["Customer ID"]}</td> */}
      {/* <td>{stub["Product ID"]}</td> */}
      <td>{stub["Product Name"]}</td>
      {/* <td>{stub["Sales"]}</td> */}
      {/* <td>{stub["Quantity"]}</td> */}
      <td>{stub["Region"]}</td>
      <td>{stub["Ship Date"]}</td>
      <td>{stub["Ship Mode"]}</td> 
      <td>{stub["Discount"]}</td>
      <td>{stub["Order Date"]}</td>
      <td>{stub["Order ID"]}</td>
      {/* <td>{stub["Profit"]}</td> */}
      <td>{stub["Segment"]}</td>
      <td>{stub["Row ID"]}</td>
      <td>{stub["Postal Code"]}</td>
      <td>{stub["Sub-Category"]}</td>
      {/* <td>{stub["City"]}</td> */}
      <td>{stub["State"]}</td>
      {/* <td>{stub["Country"]}</td> */}
    </tr>
  ))


  return (
    <div className="main-container">
    
    { !data.length ? 
      <div className="loaderDiv">
        <Loader type="Three dotd" color="#00BFFF" height={70} width={70} /> 
        <p>Loading.... This will take a little time</p>
      </div> 
      : 
      <Fragment>
      <Reports />
      <SearchArea />
      <Graphs />
      <table id="stubs">
        <thead>
          <tr>
            <td><strong>Customer Name</strong></td>
            {/* <td>Customer ID</td> */}
            {/* <td>Product ID</td> */}
            <td><strong>Product Name</strong></td>
            {/* <td>Sales</td> */}
            {/* <td>Quantity</td> */}
            <td><strong>Region</strong></td>
            <td><strong>Ship Date</strong></td>
            <td><strong>Ship Mode</strong></td>
            <td><strong>Discount</strong></td>
            <td><strong>Order Date</strong></td>
            <td><strong>Order Id</strong></td>
            {/* <td>Profit</td> */}
            <td><strong>Segment</strong></td>
            <td><strong>Row Id</strong></td>
            <td><strong>Postal Code</strong></td>
            <td><strong>Subcategory</strong></td>
            {/* <td>City</td> */}
            <td><strong>State</strong></td>
            {/* <td>Country</td> */}
          </tr>
        </thead>
        <tbody>
          { mapStubs }
        </tbody>
      </table>
      </Fragment>
    }
    </div>
  )
}

export default App;
