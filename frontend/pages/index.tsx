import type { NextPage } from 'next'
import Head from 'next/head'
import AuctionComponent from '../components/Auction'
import NavigationComponent from '../components/Navigation'
import artwork from '../public/noun.svg'

const Home: NextPage = () => {
  const currentArtwork: string = artwork

  return (
    <div className="flex justify-center bg-gray-200">
      <Head>
        <title>Pixel Sprout</title>
        <meta
          name="description"
          content="Pixel Sprout is a novel mechanism for creation and monetisation of pixel artworks by artists and everyday frens"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col container py-8">
        <NavigationComponent />
        <AuctionComponent artwork={currentArtwork} />
      </main>
    </div>
  )
}

export default Home
