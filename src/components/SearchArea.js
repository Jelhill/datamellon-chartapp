import { useDispatch, useSelector } from "react-redux"

export default function SearchArea() {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state).reducer

    function filterChart(value) {
        dispatch({ type: "ADD_SEARCH_CRITERIA_FOR_CHART", value, data })
        dispatch({ type: "GET_DATA_BY_CRITERIA", value, data })
    }

    function filterChartType(value) {
        dispatch({ type: "CHART_TYPE", value})
    }

    return (
        <div className="search-area">



      <form classsName="select-form">
          <label>Search Criteria</label><br />
         <select onChange={(e) => filterChart(e.target.value)}>
            <option value="Select an option"></option>
            <option value="Region">Region</option>
            <option value="Segment">Segment</option>
            <option value="State">State</option>
            <option value="Sub-Category">Sub Category</option>
          </select>
        </form>

        <form className="select-form">
          <label>Select Chart Type</label><br/>
         <select onChange={(e) => filterChartType(e.target.value)}>
            <option value="Select an option"></option>
            <option value="pie">Pie</option>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="doughnut">Doughnut</option>
          </select>
        </form>

        
        {/* <form>
        <label>Filter</label><br />
          <select >
           {  
            ! currentFilter.length 
            ? null 
            : currentFilter.map((data, index) => (
                <option key={index} value={data}>{ data }</option>
            ))
           }
           
          </select>
        </form> */}
      </div>
    )
}