import { BidHistoryInterface } from '../../../interfaces/BidHistoryInterface'
import { FiExternalLink } from 'react-icons/fi'

const BidHistoryComponent = ({ bids }: { bids: BidHistoryInterface[] }) => {
  return (
    <div className="flex flex-col">
      {bids.map((bid, index) => {
        return (
          <div
            className="flex flex-row justify-between border border-b-gray-500 py-4"
            key={`${bid.address}-${bid.amount}`}
          >
            <div>{bid.address}</div>
            <div className="flex flex-row gap-4">
              <div>{`Ξ ${bid.amount}`}</div>
              <a href="#">
                <FiExternalLink size={24} />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BidHistoryComponent
