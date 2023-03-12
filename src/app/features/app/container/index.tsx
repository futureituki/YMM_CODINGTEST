'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Prefectures } from '@/common/constant/prefetcure'
import { InputArea } from '@/features/app/presenter/inputArea'
import { usePrefecturesData } from '@/hook/usePrefectureData'
import { Graph } from '@/ui/graph'

export const AppContainer = () => {
  const { prefecturesData, getPrefecturesData } = usePrefecturesData()
  const [selectPrefName, setSelectPrefName] = useState<string>('')
  const [graphData, setGraphData] = useState<
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
      // graphData.splice()
    }
  }
  return (
    <div>
      <InputArea handleChange={handleChange} prefectures={Prefectures} />
      <Graph selectPref={graphData} xAxisTitle='年度' yAxisTitle='人口数' />
    </div>
  )
}
