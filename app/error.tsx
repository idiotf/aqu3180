'use client'

import { Button } from '@/components/ui/button'

const ErrorComponent = () =>
  <div className='p-8 h-full flex flex-col justify-center items-center text-center'>
    <p className='my-4'>
      외도치 않은 오류가 발생했어요..<br />
      죄송해요..
    </p>
    <Button onClick={() => location.reload()}>새로고침</Button>
  </div>

export default ErrorComponent
