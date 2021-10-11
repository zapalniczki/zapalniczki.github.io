import React from 'react'
import { formatDate, getDifferenceFromNow } from 'utils'

type Props = {
  children: string
  displayDiff?: boolean
}

const DisplayDate = ({ children, displayDiff = true }: Props) => {
  const diff = getDifferenceFromNow(children)
  const diffString = diff > 0 ? ` (+${diff})` : ` (${diff})`

  return (
    <>
      {formatDate(children)}
      {displayDiff ? diffString : ''}
    </>
  )
}

export default DisplayDate
