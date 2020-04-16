import BigNumber from 'bignumber.js'

// 大数单位缩小n位
export function unitSmaller (val, n) {
  let unitUnm = n || 0
  return new BigNumber(val).multipliedBy(new BigNumber('1e' + unitUnm)).toFixed()
}