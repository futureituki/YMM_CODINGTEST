'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Prefectures } from '@/common/constant/prefetcure'
import { InputArea } from '@/features/app/presenter/inputArea'
import { usePrefecturesData } from '@/hook/usePrefectureData'
import styles from '@/styles/page.module.css'
import { Graph } from '@/ui/graph'
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
      <h3 className={styles.heading}>都道府県</h3>
      <InputArea handleChange={handleChange} prefectures={Prefectures} />
      <Graph selectPref={graphData} xAxisTitle='年度' yAxisTitle='人口数' />
    </div>
  )
}
