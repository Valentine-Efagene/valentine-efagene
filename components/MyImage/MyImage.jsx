import Image from 'next/image'
import { bool, number, object, string } from 'prop-types'

export default function MyImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  fill,
}) {
  return (
    <Image
      src={src}
      alt={alt || ''}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={Boolean(fill)}
      className={className}
      style={style}
    />
  )
}

MyImage.propTypes = {
  alt: string,
  src: string,
  width: number,
  height: number,
  className: string,
  style: object,
  fill: bool,
}
