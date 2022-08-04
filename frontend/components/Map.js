import React from 'react'

const Map = () => {
  return (
    <div className='h-full'>
        
        <div className='h-full'>
        <iframe 
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        src="https://maps.google.com/maps?q=downtown%20los%20angeles,%20ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
        </div>
    </div>
  )
}

export default Map


