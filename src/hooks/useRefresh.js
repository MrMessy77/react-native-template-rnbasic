import React, { useState, useEffect, useRef } from 'react'

export const RefreshState = {
  Idle: 0,
  HeaderRefreshing: 1,
  FooterRefreshing: 2,
  NoMoreData: 3,
  ShowMore: 4,

  getState(json) {
    if (!json) {
      return this.NoMoreData
      // 网络错误返回没有数据
      return this.Idle
    }
    const {
      current_page = 1,
      last_page = 1
    } = json
    if (current_page >= last_page) {
      return this.NoMoreData
    } else {
      return this.Idle
    }
  },

  allLoad(json) {
    if (!json) {
      return true
    }
    const {
      current_page = 1,
      last_page = 1
    } = json
    if (current_page >= last_page) {
      return true
    } else {
      return false
    }
  }
}


export default ({ url = '', params = {} }) => {

  const page = useRef(1)
  const [dataArr, setDataArr] = useState([])
  const [refreshState, setRefreshState] = useState(RefreshState.Idle)
  
  useEffect(() => {
    (async () => {
      //正常情况不加载
      if (refreshState == RefreshState.Idle) return
      //nomoredata 情况下不加载
      if (refreshState == RefreshState.NoMoreData) return
      let isRefresh = refreshState == RefreshState.HeaderRefreshing
      let response = undefined
      let originData = isRefresh ? [] : dataArr
      if (isRefresh) page.current = 1
      try {
        response = await Network.get(url, {
          params: {
            page: page.current,
            ...params
          }
        })
        page.current += 1
        originData = originData.concat(response.data || [])
      } catch(err){}
      setDataArr(originData)
      setRefreshState(RefreshState.getState(response))
    })()
  }, [refreshState])

  return {
    page,
    dataArr, 
    refreshState,
    headerRefresh: () => setRefreshState(RefreshState.HeaderRefreshing),
    footerRefresh: () => setRefreshState(RefreshState.FooterRefreshing)
  }
}