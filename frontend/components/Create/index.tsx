import { useState } from 'react'
import CountdownComponent from './subcomponents/Countdown'
import { ArtworkItemInterface } from '../../interfaces/ArtworkItemInterface'
import ArtworksListComponent from './subcomponents/ArtworksList'
import InfoComponent from './subcomponents/Info'
import CanvasComponent from './subcomponents/Canvas'

const CreateComponent = () => {
  const artworkItems: ArtworkItemInterface[] = [
    { address: '0x01', artworkUrl: '#', creationDate: new Date('2022-09-08') },
    { address: '0x02', artworkUrl: '#', creationDate: new Date('2022-09-09') },
    { address: '0x03', artworkUrl: '#', creationDate: new Date('2022-09-10') },
    { address: '0x04', artworkUrl: '#', creationDate: new Date('2022-09-11') },
  ]

  return (
    <div className="flex justify-center my-10 gap-4">
      <CanvasComponent />
      <div className="flex flex-col justify-start w-1/3 gap-4">
        <InfoComponent />
        <div className="flex flex-row justify-start">
          <button className="border border-black px-8 py-2 rounded-2xl">
            Start
          </button>
        </div>
        <h2 className="text-2xl">Artwork Candidates</h2>
        <ArtworksListComponent items={artworkItems} />
        <p className="text-gray-600">Candidate 4</p>
        <h2 className="text-xl">PixelSprout #2</h2>
        <CountdownComponent />
      </div>
    </div>
  )
}

export default CreateComponent
