import React from 'react'
import { formatDate, getDifferenceFromNow } from 'utils'

type Props = {
  children: string
  displayDiff?: boolean
}

const DisplayDate = ({ children, displayDiff = true }: Props) => {
  const diff = getDifferenceFromNow(children)

  return (
    <>
      {formatDate(children)}

      {displayDiff ? diff : ''}
    </>
  )
}

export default DisplayDate
