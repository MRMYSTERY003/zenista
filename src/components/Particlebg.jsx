import React from 'react'
import Particles from 'react-particles-js';

export default function Particlebg() {
  return (
    <div className="App">
      By Ankit Bansal
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
   
    </div>
  )
}
