import Image from 'next/image'
import { BidHistoryInterface } from '../../interfaces/BidHistoryInterface'
import { AuctionComponentInterface } from '../../interfaces/AuctionComponentInterface'
import BidHistoryComponent from './subcomponents/BidHistory'
import BidInputComponent from './subcomponents/BidInput'
import CurrentBidAndCountdownComponent from './subcomponents/CurrentBidAndCountdown'

const AuctionComponent = ({ artwork }: AuctionComponentInterface) => {
  const previousBids: BidHistoryInterface[] = [
    { address: '0x01', amount: 62.0 },
    { address: '0x02', amount: 63.0 },
    { address: '0x03', amount: 64.0 },
    { address: '0x04', amount: 65.0 },
  ]

  return (
    <div className="flex flex-row my-10 justify-center gap-4">
      <div className="flex">
        <Image src={artwork} height={512} width={512} />
      </div>
      <div className="flex flex-col justify-start w-1/3 gap-4">
        <p className="text-gray-600">September 10, 2022</p>
        <h2 className="text-xl">PixelSprout #1</h2>
        <CurrentBidAndCountdownComponent />
        <BidInputComponent />
        <BidHistoryComponent bids={previousBids} />
      </div>
    </div>
  )
}

export default AuctionComponent
