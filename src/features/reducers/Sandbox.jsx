import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'

import { decrement, increment } from './testReducer'

export default function Sandbox() {
  const dispatch = useDispatch()
  const [target, setTarget] = useState(null)
  const data = useSelector((state) => state.test.data)
  const { loading } = useSelector((state) => state.async)

  return (
    <>
      <h1>test</h1>
      <h3>is: {data}</h3>
      <Button
        name='increment'
        loading={loading && target === 'increment'}
        onClick={(e) => {
          dispatch(increment(20))
          setTarget(e.target.name)
        }}
        content='Increment'
        color='green'
      />

      <Button
        name='decrement'
        loading={loading && target === 'decrement'}
        onClick={(e) => {
          dispatch(decrement(10))
          setTarget(e.target.name)
        }}
        content='Decrement'
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
