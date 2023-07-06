import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles id="tsparticles" params={{
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: true,
                        value_area: 1500,
                    },
                },
                line_linked: {
                    enable: false,
                    opacity: 0.03,
                },
            }
        }}/>
    )
    
}

export default Particle;