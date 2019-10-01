import * as React from 'react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import RecruitmentModal from '../components/RecruitmentModal'
import Clients from '../components/Clients'
import Techniques from '../components/Techniques'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  useEffect(() => {
    [
      'background-utrecht.jpg',
      'background-amsterdam.jpg',
      'logo-white.png'
    ].forEach(picture => new Image().src = `/static/images/${picture}`)
  }, [])

  const [showModal, setModalVisibility] = useState(true)

  return (
    <Layout>
      <RecruitmentModal
        closeModal={() => setModalVisibility(false)}
        show={showModal}
      />
      <Hero openModal={() => setModalVisibility(true)} />
      <Clients />
      <Techniques />
    </Layout>
  )
}

export default IndexPage
