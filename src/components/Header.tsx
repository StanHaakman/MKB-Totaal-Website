'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/MKB Totaal Logo No Background.png'
import {FadeIn} from "./FadeIn.tsx";

const navigation = [
  { name: 'Wat doen wij', href: '#services' },
  { name: 'Over ons', href: '#about-us' },
  { name: 'Neem contact op', href: '#contact-us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
      <header
          className={`w-full fixed z-40 transition-all duration-300 ${
              isScrolled ? 'bg-white py-4 shadow-md dark:bg-dark-primary' : 'bg-transparent py-6'
          }`}
      >
        <FadeIn>
          <nav
              aria-label="Global"
              className="mx-auto flex container items-center justify-between px-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">MKB-Totaal.com</span>
                <img
                    alt="MKB Totaal Logo"
                    src={logo}
                    className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 focus:outline-primary-light bg-primary"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className={`text-sm/6 font-semibold border-b-2 transition duration-300  ${
                          isScrolled ? 'text-primary  border-primary/0 hover:border-primary/100' : 'text-white border-white/0 hover:border-white/100'
                      }`}
                  >
                    {item.name}
                  </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className={`text-sm/6 font-bold rounded-md border-2 px-6 py-2 transition duration-300  ${
                  isScrolled ? 'text-primary dark:text-white dark:border-white  border-primary hover:bg-primary hover:text-white' : 'text-white border-white hover:bg-white hover:text-primary'
              }`}>
                Doe de quickscan <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </FadeIn>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="MKB Totaal Logo" src={logo} className="h-8 w-auto" />
              </a>
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400 focus:outline-primary-light bg-primary-light"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}
