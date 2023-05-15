

import '../styles/information.css'

function Information() {
  return (
    <div className='information'>
        <div className="informationItem">
            <div className="informationTitle">Farmers</div>
            <span className="informationCount">25</span>

        </div>

        <div className="informationItem">
            <div className="informationTitle">Total Rice(kg)</div>
            <span className="informationCount">250kgs</span>

        </div>

        <div className="informationItem">
            <div className="informationTitle">Revenue</div>
            <span className="informationCount">25000 (kwacha)</span>

        </div>

    </div>
  )
}

export default Information