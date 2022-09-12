import { useState, useRef } from 'react'

const CanvasComponent = () => {
  // GRID
  const grid16 = 16
  const grid32 = 32
  const [gridLength, setGridLength] = useState(grid16)

  const canvasSize = '640px'
  const defaultPaintColor = '#94d6ff'

  const canvasRef = useRef<HTMLDivElement>(null)

  // INTERACTIONS
  const [isInPaintMode, setInPaintMode] = useState(false)
  const [paintColor, setPaintColor] = useState(defaultPaintColor)

  const draw = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isInPaintMode) {
      e.currentTarget.style.backgroundColor = paintColor
    }
  }

  const reset = () => {}

  // RETURN
  return (
    <div
      className={`flex flex-col`}
      onMouseDown={() => {
        console.log(`On mouse down`)
        setInPaintMode(true)
      }}
      onMouseUp={() => {
        setInPaintMode(false)
      }}
      onMouseLeave={() => {
        setInPaintMode(false)
      }}
      style={{ width: `${canvasSize}` }}
    >
      <div className="flex flex-row justify-center gap-4 p-4 border border-gray-300 rounded-2xl">
        <button
          className="flex border border-black px-4 py-2 rounded-2xl"
          onClick={reset}
        >
          Reset
        </button>
        <input
          type="color"
          className="flex h-10 w-16"
          value={paintColor}
          onChange={(e) => {
            setPaintColor(e.target.value)
          }}
        />
        <select
          className="flex rounded-2xl px-4 py-2"
          onChange={(e) => {
            setGridLength(Number(e.target.value))
          }}
          value={`${gridLength}`}
        >
          <option value={`${grid16}`}>16x16 pixel</option>
          <option value={`${grid32}`}>32x32 pixel</option>
        </select>
      </div>
      <div
        className={`gap-0.5 p-1`}
        ref={canvasRef}
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${gridLength}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${gridLength}, minmax(0, 1fr))`,
          height: `${canvasSize}`,
        }}
      >
        {(() => {
          let divs = []
          for (let i = 1; i <= gridLength * gridLength; i++) {
            divs.push(
              <div
                className="rounded-sm"
                key={i}
                onMouseDown={(e) => {
                  e.currentTarget.style.backgroundColor = paintColor
                }}
                onMouseOver={(e) => {
                  draw(e)
                }}
                style={{ backgroundColor: `${defaultPaintColor}` }}
              ></div>,
            )
          }
          return divs
        })()}
      </div>
    </div>
  )
}

export default CanvasComponent
