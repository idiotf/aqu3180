const Logo = (props: React.JSX.IntrinsicElements['svg']) =>
  <svg {...props} viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='16' fill='var(--logo,oklch(0.6401 0.1929 254.5))' />
    <path
      fill='none'
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth='2'
      d='M23 9v14m0-7a7 7 0 0 0-14 0 7 7 0 0 0 14 0'
    />
  </svg>

export default Logo
