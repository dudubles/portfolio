import React, { SVGProps } from 'react'

export function CircleFlagsCl(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><mask id="circleFlagsCl0"><circle cx="256" cy="256" r="256" fill="#fff"></circle></mask><g mask="url(#circleFlagsCl0)"><path fill="#d80027" d="m0 256l254.5-51.3L512 256v256H0z"></path><path fill="#0052b4" d="M0 0h256l52.7 132.8L256 256H0z"></path><path fill="#eee" d="M256 0h256v256H256zM152.4 89l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51L82.2 140h53.6z"></path></g></svg>
  )
}
export default CircleFlagsCl