'use client'

import { useEffect, useState } from 'react'
import { PresenterContainer } from '../presenter'
import { Prefectures } from '@/common/constant/prefetcure'
import { usePrefecturesData } from '@/features/prefectures/hooks/usePrefectureData'
import { InputArea } from '@/features/prefectures/presenter/inputArea'
import { Graph } from '@/ui/graph'

export const PrefecturesContainer = () => {
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
      const deleteGraphData = graphData.filter((item) => item.prefName !== event.target.value)
      setGraphData(deleteGraphData)
    }
  }
  return (
    <PresenterContainer>
      <InputArea handleChange={handleChange} prefectures={Prefectures} />
      <Graph selectPref={graphData} xAxisTitle='年度' yAxisTitle='人口数' />
    </PresenterContainer>
  )
}
