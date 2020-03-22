import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{}>

const Tutorial: React.FC<PageProps> = () => {
  return (
    <>
      <h1>this is tutorial page.</h1>
    </>
  )
}

export default Tutorial;
