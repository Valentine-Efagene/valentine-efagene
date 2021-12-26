import React, { useEffect, useRef } from 'react'
import { any, func, object, string } from 'prop-types'
import styles from './RippleButton.module.css'

export default function RippleButton({
  id,
  children,
  onClick,
  style,
  className,
  type,
}) {
  const ref = useRef(null)

  function createRipple(ref, event) {
    const btn = ref.current
    const x = event.pageX - btn.offsetLeft
    const y = event.pageY - btn.offsetTop

    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }

  useEffect(() => {
    const listener = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        createRipple(ref, event)
      }
    }

    document.addEventListener('mousemove', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousemove', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref])

  return (
    <button
      type={type}
      id={id}
      ref={ref}
      className={`${styles.rippleButton} ${className}`}
      onClick={onClick}
      style={style}
    >
      <span>{children}</span>
    </button>
  )
}

RippleButton.propTypes = {
  children: any,
  onClick: func,
  style: object,
  className: string,
  type: string,
  id: string,
}
