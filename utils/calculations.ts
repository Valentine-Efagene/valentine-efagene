export function map_range(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}

export function vel_scale(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return Math.cos(low2 + ((high2 - low2) * (value - low1)) / (high1 - low1))
}

export function vel_scale_spin(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return Math.sin(low2 + ((high2 - low2) * (value - low1)) / (high1 - low1))
}
