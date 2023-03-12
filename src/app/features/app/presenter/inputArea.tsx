'use client';
import { Prefecture } from '@/common/const'
import { Checkbox } from '@/ui/checkbox'
import { ChangeEvent, FC } from 'react'
type Props = {
  prefectures: Prefecture[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputArea: FC<Props> = ({ prefectures, handleChange }) => {
  return (
    <div>
      {prefectures.map((item, index) => (
        <Checkbox key={item.prefCode} id={`id_${index}`} value={item.prefName} onChange={e => handleChange(e)} />
      ))}
    </div>
  )
}
