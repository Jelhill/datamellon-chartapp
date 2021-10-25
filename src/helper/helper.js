
  export function thousandseparator(number){

    if(typeof number !== "number") {
        return "Expected a number but got a " + typeof number
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}