import BarChart from '../components/BarChart'
import Information from '../components/Information'
import PieChart from '../components/PieChart'
import '../styles/home.css'

function Home() {
  return (
    <div className='home'>
        <h3 className='homeBashboard'>Dashboard</h3>
        <Information/>
        <div className='homeCharts'>
            <BarChart/>
            <PieChart/>

        </div>
        </div>
  )
}

export default Home