'use client'

import { ChangeEvent, useState } from 'react'
import { Prefectures } from '@/common/constant/prefetcure'
import { InputArea } from '@/features/app/presenter/inputArea'
import { Graph } from '@/ui/graph'

export const AppContainer = () => {
  const [graphData, setGraphData] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
  }
  return (
    <div>
      <InputArea handleChange={handleChange} prefectures={Prefectures} />
      <Graph selectPref={graphData} xAxisTitle='年度' yAxisTitle='人口数' />
    </div>
  )
}
