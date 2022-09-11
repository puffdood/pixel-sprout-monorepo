const CurrentBidAndCountdownComponent = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h3 className="flex">Current bid</h3>
        <h4 className="flex">Ξ 65.00</h4>
      </div>
      <div className="flex w-8 justify-center">
        <div className="border border-gray-300"></div>
      </div>
      <div className="flex flex-col">
        <h3 className="flex">Auction ends in</h3>
        <h4 className="flex">8h 43m 22s</h4>
      </div>
    </div>
  )
}

export default CurrentBidAndCountdownComponent
