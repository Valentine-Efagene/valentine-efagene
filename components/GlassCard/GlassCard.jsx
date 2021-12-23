import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import styles from './GlassCard.module.css'

function Tilt(props) {
  const { options, ...rest } = props
  const tilt = useRef(null)

  useEffect(() => {
    VanillaTilt.init(tilt.current, options)
  }, [options])

  return <div ref={tilt} {...rest} />
}

export default function GlassCard({ children, style, options, className }) {
  const _options = {
    max: 25,
    scale: 1,
    speed: 400,
    glare: true,
    'max-glare': 1,
    ...options,
  }

  return (
    <Tilt options={_options} class={styles.card} style={style}>
      {children}
    </Tilt>
  )
}
