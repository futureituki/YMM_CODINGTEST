import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/page.module.css'
import { AppContainer } from './features/app/container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <AppContainer/>
    </main>
  )
}
