import React from 'react'

const Map = () => {
  return (
    <div className='h-full'>
        
        <div className='h-full'>
        <iframe 
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        src="https://maps.google.com/maps?q=downtown%20los%20angeles,%20ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
        </div>
    </div>
  )
}

export default Map


