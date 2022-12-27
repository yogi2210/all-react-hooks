import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/292486327.webp?k=6ba6c3e8cb60e13e4a951447700a399289662d622902dbd26ada4d0d51dd1c3d&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Kings Villa Resort</h1>
            <span className="siDistance">500m from beach</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Private Villas</span>
            <span className="siFeatures">Entire villa - 1 bathroom - 21m^2 - 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">&#8377; 12000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>

        </div>
    </div>
  )
}

export default SearchItem