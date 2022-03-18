import '../styles/globals.css'
// import type { AppProps } from 'next/app'  remove as giving error when changing from .ts to .js
import 'regenerator-runtime/runtime'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

// Chain Id 4 represents Rinkeby network
// The 'injected' connector is web3 connection method used by Metamask
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
