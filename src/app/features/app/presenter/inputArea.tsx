'use client'

import { FC } from 'react'
import { Prefecture } from '@/common/const'
import styles from '@/styles/page.module.css'
import { Checkbox } from '@/ui/checkbox'
type Props = {
  prefectures: Prefecture[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputArea: FC<Props> = ({ prefectures, handleChange }) => (
  <div className={styles.inputarea}>
    {prefectures.map((item, index) => (
      <Checkbox
        key={item.prefCode}
        id={`${item.prefCode}`}
        value={item.prefName}
        onChange={(e) => handleChange(e)}
      />
    ))}
  </div>
)
