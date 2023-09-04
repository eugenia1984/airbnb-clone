'use client'

import { IconType } from 'react-icons'

interface CategoryInputProps {
  icon: IconType
  selected?: boolean
  label: string
  onClick: (value: string) => void
}
const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  selected,
  label,
  onClick
}) => {
  return (
    <div
      className={ `
        rounded-xl
        border-2
        p-4flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected? 'border-black': 'border-neutral-200'}
      `}
      onClick={ () => onClick(label) }
    >

    </div>
  )
}

export default CategoryInput 