
import '../styles/barchart.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
     } from 'chart.js'

import {Bar} from 'react-chartjs-2'
ChartJS.register(

    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend

)

function BarChart() {

    const data = {
        labels: ['Karonga','Nkhata-bay','Khotakota','Salima','Zomba','Chikwawa'],
        datasets: [
            {
                labels:'farmers',
                data: [120,30,67,100,57,60],
                backgroundColor: 'aqua',
                borderColor:'black',
                borderWidth: 1,

            }
        ]

    }

    const options = {

    }
  return (
    <div className='barchart'>
     <h3>Farmers data in districts</h3>

     <Bar
     data={data}
     options={options}
     >
        
     </Bar>

    </div>
  )
}

export default BarChart