import { Flexbox, Heading, Button, Banner } from 'components'
import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  link: {
    label: string
    to: string
  }
  title: string
}

const BannerWithTitleAndLink = ({ link: { label, to }, title }: Props) => {
  const history = useHistory()

  return (
    <Banner marginTop="xxl-size" size="SMALL">
      <Flexbox
        alignItems={['unset', 'flex-start', 'flex-start', 'center']}
        flexDirection={['unset', 'column', 'column', 'row']}
        justifyContent="space-between"
        width="100%"
      >
        <Heading level={5}>{title}</Heading>

        <Button
          icon="arrow-right"
          label={label}
          marginTop={['unset', 'm-size', 'm-size', 0]}
          onClick={() => history.push(to)}
        />
      </Flexbox>
    </Banner>
  )
}

export default BannerWithTitleAndLink
