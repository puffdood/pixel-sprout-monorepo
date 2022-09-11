const InfoComponent = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl">Info</h2>
      <ul className="py-2">
        <li className="py-1">
          Start the timer and you have 30 minutes to create an artwork
        </li>
        <li className="py-1">
          1 wallet, 1 chance to create an artwork for the next PixelSprout piece
        </li>
        <li className="py-1">
          Artwork is currently admin-chosen but in the future would be open for
          voting by PixelSprout holders (once the hodlers user base is larger)
        </li>
      </ul>
    </div>
  )
}

export default InfoComponent
