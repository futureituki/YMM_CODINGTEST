import { FC, ReactNode } from 'react'
import styles from '@/styles/page.module.css'
import { TitleBar } from '@/ui/titlebar'

type Props = {
  children: ReactNode
}
export const PresenterContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.main_container}>
      <TitleBar>都道府県別の総人口推移グラフ</TitleBar>
      <div className={styles.main_contents}>
        <h3 className={styles.heading}>都道府県</h3>
        {children}
      </div>
    </div>
  )
}
