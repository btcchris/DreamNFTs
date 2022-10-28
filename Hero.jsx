
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { mint } from '../dreamNFT'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await mint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
             <br />
            <span className="text-gradient">NFT</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect Dream NFTs.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={mint}
          >
            Mint Now
          </button>

          <a
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt=""
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#e32970] text-xs"></span>
            </div>
          </a>

          
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://darlingtongospel.medium.com/"
            >
              <img className="w-7 h-7" src={medium} alt="medium" />
            </a>
          

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/400</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
