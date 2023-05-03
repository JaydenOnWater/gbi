import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to GamerBoyInd Texture Pack!" />
        <p className="description">
          Made bY <code>YouTube/@JaydenOnFire</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
