import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const NavigationComponent = () => {
  return (
    <nav className="flex flex-row justify-between">
      <Link href="/">
        <h1 className="text-3xl justify-start cursor-pointer">Pixel Sprout</h1>
      </Link>
      <div className="flex justify-end gap-8 items-center">
        <Link href="create">
          <button className="border rounded-xl border-solid border-black py-2 px-4">
            Create
          </button>
        </Link>
        <ConnectButton />
      </div>
    </nav>
  )
}

export default NavigationComponent
