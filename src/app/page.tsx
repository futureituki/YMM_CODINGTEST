import { Inter } from 'next/font/google'
import Image from 'next/image'
import { AppContainer } from './features/app/container'
import styles from '@/styles/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <AppContainer />
    </main>
  )
}
