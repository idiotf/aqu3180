import type { CommonLogoProps } from './common'

export function TaegeukLogo(props: CommonLogoProps) {
  return (
    <svg {...props} viewBox='0 0 32 32'>
      <svg viewBox='-36 -24 300 300' height='32' width='32'>
        <circle
          transform='rotate(-56.31)'
          fill='#cd2e3a'
          r='150'
          cy='164.746'
          cx='-41.603'
        />
        <path
          d='M-10.808 42.795A75 75 0 0 0 114 126a75 75 0 0 1 124.808 83.205A150 150 0 0 1-10.808 42.795'
          fill='#0047a0'
        />
      </svg>
      <path
        strokeLinecap='round'
        strokeWidth='2'
        stroke='#fff'
        fill='none'
        d='M23 9v14m0-7a7 7 0 0 0-14 0 7 7 0 0 0 14 0'
      />
    </svg>
  )
}
