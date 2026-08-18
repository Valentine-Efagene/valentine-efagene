declare module 'react-wavify'

declare module '@/components/WhiteLaptop/WhiteLaptop' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    move?: boolean
    animate?: boolean
    time?: number
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}

declare module '@/components/GlowingHeadphones/GlowingHeadphones' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    move?: boolean
    animate?: boolean
    time?: number
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}

declare module '@/components/Setup/Setup' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    animate?: boolean
    time?: number
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}

declare module '@/components/Graduation/Graduation' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    animate?: boolean
    time?: number
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}

declare module '@/components/Rocket/Rocket' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    move?: boolean
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}

declare module '@/components/Map/Map' {
  import type { ComponentType } from 'react'

  const Model: ComponentType<{
    scale?: number
    rotation?: [number, number, number]
    position?: [number, number, number]
  }>

  export default Model
}
