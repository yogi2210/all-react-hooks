import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286291035.jpg?k=0503c5d4ea41475316b8378eaa96e78d775227584e537174a96c0c17d11fd92a&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286291040.jpg?k=3c1c1cdcf62f799927a523a159ec612cf630c8c9e9222b45b0cf2d3fb1b796dc&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292020.jpg?k=03bd6ed223e5a2c8d19c73b1211876a3ce354900c6eb93fada2502a8c63b4852&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286291031.jpg?k=5542ac4548248c1f0a7d2fddd8428d4899e5d654a4232daa13baeb680058afd3&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286291022.jpg?k=eaa0ba6a657eb0ce0fbc9b5018c96233b8fd013ee6545e323122991aad82ddc5&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/286291012.jpg?k=a3b630e99a719d910263ab9390e51e7458b5f3292b375cee28fd03bb8ea426d2&o=&hp=1"
    }
  ]
  const handleOpen =(i)=>{
      setSlideNumber(i)
      setOpen(true)
  }
  const handleMove = (direction)=>{
    let newSlideNumber

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
      {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
          </div>}
        <div className="hotelWrapper">
        
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Kings Villa Resort</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Palolem street palolem beach canacona south goa, 403702 Canacona, India</span>
          </div>
          <span className="hotelDistance"> Excellent Location - 500m from the beach </span>
          <span className="hotelPriceHighlight">Book a stay over 15000 at this property and get a free airport taxi</span>
          <div className="hotelImages">
              {photos.map((photo, i)=>{
                return <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Party Capital</h1>
              <p className="hotelDesc">
              Featuring a garden, restaurant, bar and free WiFi, Royal Castle Beach Resort is located in Canacona, a few steps from Palolem Beach and 1.9 km from Colomb Beach. The property is around 2.3 km from Patnem Beach, 35.4 km from Margao Train Station and 24.1 km from Cabo De Rama Fort. The property has room service and a 24-hour front desk for guests.
              At the hotel, rooms contain a balcony with a garden view. With a private bathroom equipped with a shower and free toiletries, certain accommodations at Royal Castle Beach Resort also feature a sea view. At the accommodation, each room is equipped with a seating area.
              A continental, American or Asian breakfast is served at the property.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weekend stay </h1>
              <span>
                Located in the heart of party capital, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>12000</b> (3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Hotel