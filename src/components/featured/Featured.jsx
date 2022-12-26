import './featured.css'

import React from 'react'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140040902.jpg?k=cc640a6bf0d56605d51d2efd34e35408aa55daab0b586be469fe7f9b6ed76518&o=" alt="" />
            <div className="featuredTitles">
                <h1>Trondhium</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140052809.jpg?k=32c638c8195324aed3c06e30208500ecc6a4a9095738babee43b48f9b739f3a7&o=" alt="" />
            <div className="featuredTitles">
                <h1>Sixt</h1>
                <h2>233 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140040902.jpg?k=cc640a6bf0d56605d51d2efd34e35408aa55daab0b586be469fe7f9b6ed76518&o=" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>23 properties</h2>
            </div>
        </div>
       
    </div>
  )
}

export default Featured