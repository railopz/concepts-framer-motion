import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import FirstAndSecond from '../components/FirstAndSecond'

import Banner1 from '../assets/baner-1.jpg'

import { Main, Section, Sticky } from '../styles/pages'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Laumai - Development</title>
      </Head>

      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '19.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  )
}

export default Home

