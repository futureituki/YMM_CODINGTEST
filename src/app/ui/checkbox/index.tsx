'use client'

import { FC } from 'react'
import styles from '@/styles/ui.module.css'

type Props = {
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox: FC<Props> = ({ id, value, onChange }) => (
  <div className={styles.checkbox_wrapper}>
    <input
      id={id}
      type='checkbox'
      name='inputNames'
      onChange={onChange}
      value={value}
      className={styles.checkbox}
    />
    <span>{value}</span>
  </div>
)
