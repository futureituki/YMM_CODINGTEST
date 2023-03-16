import axios from 'axios'
import { useState } from 'react'
import { Type } from '@/common/type'

export const usePrefecturesData = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY,
    [prefecturesData, setPrefecturesData] = useState<Type | undefined>(),
    getPrefecturesData = async (prefCode: string) =>
      await axios
        .get<Type>(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          {
            headers: {
              'X-API-KEY': apiKey,
            },
          },
        )
        .then((res) => {
          setPrefecturesData(res.data)
          return res.data.result.data[0].data
        })
        .catch((e) => {})
  return { prefecturesData, setPrefecturesData, getPrefecturesData }
}
