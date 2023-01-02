import './reserve.css'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Reserve = ( {setOpen, hotelId} ) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const {data, loading, error} = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);
    const {dates} = useContext(SearchContext)

    const navigate = useNavigate()

    const getDatesInRange = (startDate, endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date =new Date(start.getTime())

        let list = []

        while(date <= end){
            list.push(new Date(date).getTime())
            date.setDate(date.getDate()+1)
        }
        return list
    }
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date)=> alldates.includes(new Date(date).getTime()))

        return !isFound
    }

    const handleSelect = (e)=>{
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item)=> item !== value) )
    }
   
    const handleClick = async ()=>{
        try {
            await Promise.all(selectedRooms.map(roomId=>{
                const res = axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`, {dates: alldates})
                return res.data
            }))
            setOpen(false)
            navigate('/')
        } catch (err) {
            
        }

    }

  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={()=>setOpen(false)} />
        <span>Select your rooms: </span>
        {data.map(item=>{
            return <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
                    <div className="rPrice">{item.price}</div>
                </div>
                <div className="rSelectRooms">
                    {item.roomNumber.map(roomnumber=>(
                        <div className="room">
                            <label>{roomnumber?.number}</label>
                            <input type="checkbox" value={roomnumber._id} onChange={handleSelect} disabled={!isAvailable(roomnumber)} />
                        </div>
                    ))}
                    </div>
            </div>
        })}
        <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve