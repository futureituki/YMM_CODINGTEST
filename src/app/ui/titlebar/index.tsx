import { FC, ReactNode } from 'react'
import styles from '@/styles/ui.module.css'
type Props = {
  children: ReactNode
}
export const TitleBar: FC<Props> = ({ children }) => {
  return (
    <div className={styles.titlebar}>
      <h1>{children}</h1>
    </div>
  )
}
