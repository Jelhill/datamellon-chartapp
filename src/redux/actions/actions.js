import axios from "axios"
export const UPDATE_USER_INPUTS = "UPDATE_USER_INPUTS"

export const getStubs = async () => {
    const stubs = await axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", { "angular_test": "angular-developer" });
    return (dispatch) => {
        dispatch({
          type: "ADD_DATA_TO_STORE",
          data: stubs.data
        })
    }
}


// export const addChartCriteriaToState = (value) => {
//     return{
//         type: "ADD_SEARCH_CRITERIA_FOR_CHART",
//         value,
//         chartDataValue: getChartData(value),
//         data
//     }
// }

// export const addChartCriteriaToState = (value) => {
//     return{
//         type: "ADD_SEARCH_CRITERIA_FOR_CHART",
//         value
//     }
// }

