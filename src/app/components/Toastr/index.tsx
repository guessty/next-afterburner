import * as React from 'react'
import ReduxToastr from 'react-redux-toastr'
// @ts-ignore
import ReduxToastrStyles from 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
//

export default () => (
  <React.Fragment>
    <style jsx global>{ReduxToastrStyles}</style>
    <ReduxToastr
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </React.Fragment>
)
