import { useSelector } from "react-redux"
import { Pie, Line, Bar, Doughnut } from "react-chartjs-2"
export default function Graphs() {

    const { chartCriteria, chartType, regionsData } = useSelector((state) => state).reducer
    
    const chartData = {
        labels: Object.keys(regionsData),
        datasets: [{
          label: chartCriteria, 
          data: Object.values(regionsData),
          backgroundColor: ["#F9E79F", "#DC7633", "#48C9B0", "#C39BD3", "#E74C3C", "#D68910", "#F9E79F", "#DC7633", "#48C9B0", "#C39BD3", "#E74C3C", "#D68910"]
        }]
      }
    

    function chart() {
        if( chartType === "pie") {
            return <div className="graph-area">
                        <Pie data={chartData}
                            height={60}
                            width={200}
                            options={{maintainAspectRatio: false}}
                        />
                    </div>
        }
    
        if( chartType === "line") {
          return <div className="graph-area">
                    <Line data={chartData}
                        height={60}
                        width={200}
                        options={{maintainAspectRatio: false}}
                    />
                  </div>
        }
        
        if( chartType === "bar") {
          return <div className="graph-area">
                      <Bar data={chartData}
                          height={60}
                          width={200}
                          options={{maintainAspectRatio: false}}
                      />
                  </div>
        }

        if( chartType === "doughnut") {
          return <div className="graph-area">
                      <Doughnut data={chartData}
                          height={60}
                          width={200}
                          options={{maintainAspectRatio: false}}
                      />
                  </div>
        }

        return null
    
      }
      
    return (
        chartType ? chart() :  null
    )
}