import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toasthandler = toast) => {
    toasthandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff', //green check mark
        },
      }
    )
  }

  //add logged users to sanity
  useEffect(() => {
    if (!address)
      return //if no address return else add addresss to sanity
      // ;used so that compiler knows that below function is not part of if block
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      } //user schema

      const result = await client.createIfNotExists(userDoc) //update database if new user by looking at id (address) given
      welcomeUser(result.userName) //call function by passing name
    })() // IIFE. caling function immediately
  }, [address])

  return (
    <div className="overflow-hidden">
      <div className={style.wrapper}>
        {/* render toast */}
        <Toaster position="top-center" reverseOrder={false} />
        {address ? (
          <>
            <Header />
            <Hero />
          </>
        ) : (
          <div className={style.walletConnectWrapper}>
            <button
              className={style.button}
              onClick={() => connectWallet('injected')}
            >
              Connect Wallet
            </button>
            <div className={style.details}>
              You need Chrome to be
              <br /> able to run this app.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
