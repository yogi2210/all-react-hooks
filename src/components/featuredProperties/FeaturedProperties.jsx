import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp' >
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/242740031.webp?k=c0748b237e6051854e8b1bee33f5e0993619995cc96742d55240ab6e324d2c34&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Hotel Armada</span>
            <span className="fpCity">Delhi, Delhi</span>
            <span className="fpPrice">Starting from ₹ 29,300</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/109319008.webp?k=b8fc6fbc8d874cffedf49c0080f14933a20995b040dc02aeaee3afad1e79c670&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Carinya Park</span>
            <span className="fpCity">Australia, Gembrook</span>
            <span className="fpPrice">Starting from ₹ 13,159</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=ad89bc70ec138736b22947f52b7e0ecbac176026e13c50646147303582d94bcd&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Taj Village</span>
            <span className="fpCity">Dehradun UK</span>
            <span className="fpPrice">Starting From ₹ 16,154</span>
            <div className="fpRating">
                <button>8.2</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">JW Marriot</span>
            <span className="fpCity">Jaipur, Rajasthan</span>
            <span className="fpPrice">Starting from ₹ 30,134</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties