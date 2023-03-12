import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FC, useRef } from 'react'

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
  let series: Highcharts.SeriesOptionsType[] = []
  const options: Highcharts.Options = {
    xAxis: {
      title: {
        text: xAxisTitle,
      },
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
    <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
  )
}
