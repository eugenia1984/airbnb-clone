'use client'

import { Button } from '@/components/ui/button'
import { create } from '@/actions/create-board'

export const Form = () => {
  return (
    <form action={ create }>
      <input
        id='title'
        name='title'
        required
        placeholder='Enter a board title'
        className="border-black border p-1 mr-2"
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}