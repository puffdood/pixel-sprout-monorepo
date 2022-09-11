import { ArtworkItemInterface } from '../../../interfaces/ArtworkItemInterface'
import { FiExternalLink } from 'react-icons/fi'

const ArtworksListComponent = ({
  items,
}: {
  items: ArtworkItemInterface[]
}) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => {
        return (
          <div
            className="flex flex-row justify-between border border-b-gray-500 py-4"
            key={item.address}
          >
            <div>{item.address}</div>
            <div className="flex flex-row gap-4">
              <div>{item.creationDate.toDateString()}</div>
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

export default ArtworksListComponent
