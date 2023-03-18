import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FC, useRef } from 'react'
import '@/styles/globals.css'
import styles from '@/styles/ui.module.css'
type Props = {
  props?: HighchartsReact.Props
  xAxisTitle: string
  yAxisTitle: string
  selectPref: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}
export const Graph: FC<Props> = ({ props, xAxisTitle, yAxisTitle, selectPref }) => {
  const series: Highcharts.SeriesOptionsType[] = []
  let categories = []
  for (const pref of selectPref) {
    const data = []
    for (const d of pref.data) {
      data.push(d.value)
      categories.push(String(d.year))
    }
    series.push({
      type: 'line',
      // 都道府県の名前
      name: pref.prefName,
      // 年数
      data,
    })
  }
  const options: Highcharts.Options = {
    xAxis: {
      width: '100%',
      title: {
        text: xAxisTitle,
      },
      categories,
    },
    yAxis: {
      title: {
        text: yAxisTitle,
      },
    },
    series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
  }
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  return (
    <div className={styles.graph}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </div>
  )
}
