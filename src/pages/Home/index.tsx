import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { Carousel, Page } from 'components'

import { useTranslation } from 'hooks'
import Bestsellers from './Bestsellers'
import { Newsletter } from 'commonComponents'
import Featured from './Featured'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const { t } = useTranslation('HOME')
  const notify = () => toast('Wow so easy!')

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <ToastContainer />

      <Carousel>{['YOUR_PLACE']}</Carousel>

      <button onClick={notify}>Notify!</button>

      <Featured />

      <Newsletter />

      <Bestsellers />
    </Page>
  )
}

export default Home
