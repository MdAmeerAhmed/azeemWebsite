import React from 'react'

function Sentence({text, bgGradient,Heading="h5"}) {
  return (
    <div className='w-100 d-flex' style={{ height: "200px",
        backgroundImage: bgGradient || "linear-gradient(to right, rgb(32, 4, 81), rgb(58, 68, 247))" 
      }} >
        <div>
            <Heading className='text-white text-center fs-2 mx-5 p-5 fw-normal'>{text}</Heading>
        </div>
        </div>
  )
}

export default Sentence