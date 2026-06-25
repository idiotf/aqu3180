const shadcnLogo = (props: React.SVGProps<SVGSVGElement>) =>
  <svg {...props} viewBox='0 0 256 256'>
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={32}
      d='m208 128-80 80m64-168L40 192'
    />
  </svg>

export default shadcnLogo
