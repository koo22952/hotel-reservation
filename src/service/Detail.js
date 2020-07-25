import React from 'react'

// import Detail from '../views/Detail'

function withDetail(Component) {
  return function DetailHoc(props) {
    return <Component {...props} />
  }
}

export default withDetail

// 若要在邏輯層引入 view 的檔案做成 HOC，必須記得 router 路徑也需要更改，component 引用路徑調整
// export default withDetail(Detail)

/*
 * routes
 *
 * import Detail from 'service/Detail'
 *
 * {
 *    path: '/detail',
 *    component: Detail,
 *    exact: true,
 * },
 *
 *
 *
 * */
