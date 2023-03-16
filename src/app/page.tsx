import { PrefecturesContainer } from './features/prefectures/container'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <PrefecturesContainer />
    </main>
  )
}
