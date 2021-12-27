import Image from 'next/image'
import { number, object, string } from 'prop-types'
import React from 'react'

export default function MyImage({
  src,
  alt,
  layout,
  width,
  height,
  className,
  style,
}) {
  return (
    <div className={className} style={style}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
      />
    </div>
  )
}

MyImage.propTypes = {
  alt: string,
  src: string,
  layout: string,
  width: number,
  height: number,
  className: string,
  style: object,
}
