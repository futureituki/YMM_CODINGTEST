'use client'

import { useEffect, useState } from 'react'
import { Prefectures } from '@/common/constant/prefetcure'
import { usePrefecturesData } from '@/features/app/hooks/usePrefectureData'
import { InputArea } from '@/features/app/presenter/inputArea'
import styles from '@/styles/page.module.css'
import { Graph } from '@/ui/graph'
import { TitleBar } from '@/ui/titlebar'
export const AppContainer = () => {
  const { prefecturesData, getPrefecturesData } = usePrefecturesData(),
    [selectPrefName, setSelectPrefName] = useState<string>(''),
    [graphData, setGraphData] = useState<
      { prefName: string; data: { year: number; value: number }[] }[]
    >([])
  useEffect(() => {
    if (prefecturesData) {
      setGraphData([
        ...graphData,
        { prefName: selectPrefName, data: prefecturesData.result.data[0].data },
      ])
    }
  }, [prefecturesData])
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      await getPrefecturesData(event.target.id)
      setSelectPrefName(event.target.value)
    } else {
      // GraphData.splice()
      const deleteGraphData = graphData.filter((item) => item.prefName !== event.target.value)
      setGraphData(deleteGraphData)
    }
  }
  return (
    <div className={styles.main_container}>
      <TitleBar>都道府県別の総人口推移グラフ</TitleBar>
      <div className={styles.main_contents}>
        <h3 className={styles.heading}>都道府県</h3>
        <InputArea handleChange={handleChange} prefectures={Prefectures} />
        <Graph selectPref={graphData} xAxisTitle='年度' yAxisTitle='人口数' />
      </div>
    </div>
  )
}
