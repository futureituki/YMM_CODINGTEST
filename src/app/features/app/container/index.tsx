'use client';

import { Prefectures } from '@/common/constant/prefetcure'
import { ChangeEvent } from 'react'
import { InputArea } from '@/features/app/presenter/inputArea'

export const AppContainer = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
  }
  return (
    <div>
      <InputArea handleChange={handleChange} prefectures={Prefectures} />
    </div>
  )
}
