import { useMemo } from 'react'
import { CommonLogo, type CommonLogoProps } from './common'
import { KoreanLogo } from './korean'

function matchesDay(a: Date, b: Date) {
  return (
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

const koreanDay = new Date('10. 9.')

export function DynamicLogo(props: CommonLogoProps) {
  const date = useMemo(() => new Date(), [])

  if (matchesDay(date, koreanDay)) {
    return <KoreanLogo {...props} />
  }

  return <CommonLogo {...props} />
}
