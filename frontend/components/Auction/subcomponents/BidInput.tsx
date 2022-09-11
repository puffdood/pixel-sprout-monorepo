const BidInputComponent = () => {
  return (
    <div className="flex flex-row justify-between">
      <input
        type="text"
        placeholder="Ξ 66 or more"
        className="flex rounded-2xl p-4 w-3/4"
      />
      <button className="flex ml-2 bg-gray-500 text-white p-4 rounded-2xl">
        Place bid
      </button>
    </div>
  )
}

export default BidInputComponent
