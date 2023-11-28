import { useNavigate } from 'react-router-dom';
import './SearchItem.css';

const SearchItem = () => {


  const navigate = useNavigate();

  const handleSingle =() =>{
     navigate("/hotels/:id")
  }
  return (
    <div className='searchItem' onClick={handleSingle} style={{cursor:"pointer"}}>
      <img src="https://digital.ihg.com/is/image/ihg/holiday-inn-katra-8638716686-4x3" alt="" className='siImg'/>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>

  )
}

export default SearchItem
