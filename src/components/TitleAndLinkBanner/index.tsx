import { Heading, Banner, Button } from 'components'
import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  title: string
  link: {
    to: string
    label: string
  }
}

const TitleAndLinkBanner = ({ link: { label, to }, title }: Props) => {
  const history = useHistory()

  return (
    <>
      <Banner
        horizonal
        marginTop="xxl-size"
        small
        title={<Heading level={5}>{title}</Heading>}
      >
        <Button icon="arrow-right" onClick={() => history.push(to)}>
          {label}
        </Button>
      </Banner>
    </>
  )
}

export default TitleAndLinkBanner
