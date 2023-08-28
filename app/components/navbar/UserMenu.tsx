'use client'

import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal'

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const airbnbBtn = "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"

  const menuBtn = "absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white oflerflow-hidden right-0 top-12 text-sm"

  const avatarBtn = "p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"

  return (
    <div className="relative">
      <div className="flex flex-center items-center gap-3">
        <div
          className={ airbnbBtn }
          onClick={ () => { } }
        >
          Airbnb your home
        </div>
        <div
          className={ avatarBtn }
          onClick={ toggleOpen }
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      { isOpen && (
        <div className={ menuBtn }>
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={ loginModal.onOpen }
                label="Login"
              />
              <MenuItem
                onClick={ registerModal.onOpen }
                label="Sing up"
              />
            </>
          </div>
        </div>
      ) }
    </div>
  )
}

export default UserMenu