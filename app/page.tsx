"use client"
import { Banner } from '@/components/Banner/Banner'
import { Header } from '@/components/Header/Header'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { TransitionPage } from '@/components/TransitionPage'

import dynamic from "next/dynamic"
import { Properties } from '@/components/Properties/Properties'
import { JoinCommunity } from '@/components/JoinCommunity'
import { Footer } from '@/components/Footer'


const LocationMap = dynamic(
  () => import('../components/Location').then(module => module.Location),
  {
    ssr: false
  }
)

export default function Home() {

  return (
    <>
      <TransitionPage />
      <Header />

      <main>
        <Banner />
        <Properties />
        <div className="max-w-6xl mx-auto">
          <Services />
          <LocationMap />
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
