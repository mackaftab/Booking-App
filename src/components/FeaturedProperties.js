import './FeaturedProperties.css';

const FeaturedProperties = () => {
  return (
    <div className="fp">
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Comfort Suites Airport</span>
      <span className="fpCity">Austin</span>
      <span className="fpPrice">Starting from $140</span>
      <div className="fpRating">
        <button>9.3</button>
        <span>Exceptional</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/0e/d5/c2/70/pool-side.jpg"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Four Seasons Hotel</span>
      <span className="fpCity">Lisbon</span>
      <span className="fpPrice">Starting from $99</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://www.kayak.co.in/rimg/himg/ea/1d/b8/ice-483569-99537552-319130.jpg?width=1366&height=768&crop=true"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Hilton Garden Inn</span>
      <span className="fpCity">Berlin</span>
      <span className="fpPrice">Starting from $105</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
  </div>
  )
}

export default FeaturedProperties
