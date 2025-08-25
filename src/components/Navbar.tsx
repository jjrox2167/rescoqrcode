import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Main Menu', href: '/', current: true },
  { name: 'Android', href: '#', current: false },
  { name: 'iOS', href: '#', current: false },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 bg-red-900  border-b border-red-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center font-medidum">
        <h1 className='text-2xl font-semibold text-zinc-50 '>Rural Electric Supply Cooperative</h1>
    </div>
    </div>
    </Disclosure>
  )
}
