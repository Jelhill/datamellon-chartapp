import { 
    
 } from "../actions/actions"

const initialState = {
    data: [],
    chartCriteria: "",
    regions: [],
    segments: [],
    subCategories: [],
    states: [],
    currentFilter: [],
    regionsData: {},
    chartType: "",
    sales: 0,
    profit: 0,
    quantity: 0
    
}   

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === "ADD_DATA_TO_STORE") {
        const { data } = action
        const regions = [...new Set(!data.length ? [] : data.map(stub =>  stub["Region"]))]
        const segments =  [...new Set(!data.length ? [] : data.map(stub =>  stub["Segment"]))]
        const subCatefories =  [...new Set(!data.length ? [] : data.map(stub =>  stub["Sub-Category"]))]
        const states =  [...new Set(!data.length ? [] : data.map(stub =>  stub["State"]))]
        const sales = data.reduce((acc, item) => acc + +item["Sales"], 0)
        const quantity = data.reduce((acc, item) => acc + +item["Quantity"], 0)
        const profit = data.reduce((acc, item) => acc + +item["Profit"], 0)
        newState.data = action.data
        newState.regions = regions
        newState.segments = segments
        newState.subCategories = subCatefories
        newState.states = states
        newState.sales = +sales.toFixed(2)
        newState.quantity = +quantity.toFixed(2)
        newState.profit = +profit.toFixed(2)

    }

    if(action.type === "ADD_SEARCH_CRITERIA_FOR_CHART") {
        newState.chartCriteria = action.value
    }

    if(action.type === "GET_DATA_BY_CRITERIA") {
        const { data, value } = action
        newState.currentFilter = action.value
        const filter = [...new Set(!data.length ? [] : data.map(stub =>  stub[value]))]
        const criteria = !data.length ? [] : data.map(stub =>  stub[value])

        const regionsData = () => {
            const data = {}
            if(!criteria.length) {
                return []
            }
            criteria.forEach(region => data[region] = data[region] + 1 || 1)
            return data
        } 

         newState.currentFilter = filter
         newState.regionsData = regionsData()

    }

    if(action.type === "CHART_TYPE") {
        newState.chartType = action.value
    }

    return newState
}

export default userReducer