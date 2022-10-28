import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './dreamNFT'
import Alert from './components/Alert'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'

const App = () => {
  const [nfts] = useGlobalState('nfts')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
   
  }, [])

}

export default App
