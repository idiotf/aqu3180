import { useMemo } from 'react'
import { CommonLogo, type CommonLogoProps } from './common'
import { KoreanLogo } from './korean'

function matchesDay(a: Date, b: Date) {
  return (
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

const koreanDay = new Date('10.9')
const anniversaries = [
  new Date('3.1'),
  new Date('6.6'),
  new Date('7.17'),
  new Date('8.15'),
  new Date('10.3'),
]

export function DynamicLogo(props: CommonLogoProps) {
  const date = useMemo(() => new Date(), [])

  if (matchesDay(date, koreanDay)) {
    return <KoreanLogo {...props} />
  }

  if (anniversaries.some(v => matchesDay(date, v))) {
    return <TaegeukLogo {...props} />
  }

  return <CommonLogo {...props} />
}
