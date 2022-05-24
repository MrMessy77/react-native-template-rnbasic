import React, { useState, useEffect, useRef } from 'react';
import { RefreshState } from '@/components';

export default ({ api, limit = 10, params = {}, deep, options = {} }) => {
  const page = useRef(1);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState({});
  const [refreshState, setRefreshState] = useState(RefreshState.Idle);

  // 重置数据
  const resetData = (payload) => {
    setData(payload);
  }
  
  useEffect(() => {
    (async () => {
      //正常情况不加载
      if (refreshState == RefreshState.Idle || refreshState == RefreshState.Failure) return
      //nomoredata 情况下不加载
      if (refreshState == RefreshState.NoMoreData) return
      let isRefresh = refreshState == RefreshState.HeaderRefreshing
      let result = {};
      let originData = isRefresh ? [] : data
      let responseData = {};
      if (isRefresh) page.current = 1;
      try {
        responseData = await api({
          page: page.current,
          limit,
          ...params
        }, options);
        setResponse(responseData);

        if (deep) {
          result = responseData[deep] || {};
        } else {
          result = responseData;
        }

        page.current += 1;
        originData = originData.concat(result.data || []);
      } catch(err){
        setRefreshState(RefreshState.Failure);
      }
      setData(originData);
      if ((result.data || []).length < limit) {
        setRefreshState(RefreshState.NoMoreData);
      } else {
        setRefreshState(RefreshState.Idle);
      }
    })()
  }, [refreshState]);

  return {
    page,
    data,
    response,
    refreshState,
    headerRefresh: () => setRefreshState(RefreshState.HeaderRefreshing),
    footerRefresh: () => setRefreshState(RefreshState.FooterRefreshing),
    resetData
  }
}