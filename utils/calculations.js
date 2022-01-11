export function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}

export function vel_scale(value, low1, high1, low2, high2) {
  return Math.cos(low2 + ((high2 - low2) * (value - low1)) / (high1 - low1))
}

export function vel_scale_spin(value, low1, high1, low2, high2) {
  return Math.sin(low2 + ((high2 - low2) * (value - low1)) / (high1 - low1))
}
