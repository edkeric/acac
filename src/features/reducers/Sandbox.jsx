import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'

import { decrement, increment } from './testReducer'

export default function Sandbox() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.test.data)

  return (
    <>
      <h1>test</h1>
      <h3>is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content='increment'
        color='green'
      />

      <Button
        onClick={() => dispatch(decrement(10))}
        content='decrement'
        color='blue'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='open modal'
        color='yellow'
      />
    </>
  )
}
