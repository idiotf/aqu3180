export type CommonLogoProps = Omit<React.ComponentProps<'svg'>, 'viewport'>

export function CommonLogo(props: CommonLogoProps) {
  return (
    <svg {...props} viewBox='0 0 32 32'>
      <circle cx='16' cy='16' r='16' fill='var(--logo,oklch(.6401.1929 254.5))' />
      <path
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeWidth='2'
        d='M23 9v14m0-7a7 7 0 0 0-14 0 7 7 0 0 0 14 0'
      />
    </svg>
  )
}
