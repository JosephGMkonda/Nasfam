
import '../styles/piechart.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
     } from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJS.register(

    ArcElement,
    Tooltip,
    Legend
    
    )

function PieChart() {
    const data = {
        labels: ['Kilombelo','Differ','Kalulu'],
        datasets: [{

            data:['20','40','40'],
            backgroundColor: ['aqua','red','purple']
            
        }]
        

    }

    const options= {

    }
  return (
    <div className='piechart'>
        <h3>Quantity of Rice</h3>

        <div className='piechartData'>
            <Pie
            data={data}
            width={300}
            height={300}
            options={{ maintainAspectRatio: false }}
            >

            </Pie>
        </div>


    </div>
  )
}

export default PieChart