import { useId } from 'react'

const NextJSLogo = (props: React.SVGProps<SVGSVGElement>) => {
  const a = useId()
  const b = useId()

  return (
    <svg
      {...props}
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit={2}
      clipRule='evenodd'
      viewBox='0 0 512 512'
    >
      <g transform='translate(.722 .64)scale(6.375)'>
        <circle cx={40} cy={40} r={40} />
        <path
          fill={`url(#${a})`}
          fillRule='nonzero'
          d='M66.448 70.009 30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40 40 0 0 0 4.226-3.255'
        />
        <path fill={`url(#${b})`} d='M51.111 24h5.333v32h-5.333z' />
        <circle cx={40} cy={40} r='39.625' fill='none' stroke='#444' />
      </g>
      <defs>
        <linearGradient
          id={a}
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform='rotate(51.103 -29.93 76.555)scale(25.1269)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={b}
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform='rotate(90.218 14.934 38.787)scale(23.50017)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default NextJSLogo
