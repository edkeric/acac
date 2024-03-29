import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function EventFilters({ setPredicate, predicate, loading }) {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%' }}>
        <Header icon='filter' attached color='black' content='Filters' />
        <Menu.Item
          content='All Events'
          active={predicate.get('filter') === 'all'}
          onClick={() => setPredicate('filter', 'all')}
          disabled={loading}
        />
        <Menu.Item
          content="I'm going"
          active={predicate.get('filter') === 'isGoing'}
          onClick={() => setPredicate('filter', 'isGoing')}
          disabled={loading}
        />
        <Menu.Item
          content="I'm hosting"
          active={predicate.get('filter') === 'isHost'}
          onClick={() => setPredicate('filter', 'isHost')}
          disabled={loading}
        />
      </Menu>
      <Header icon='calendar' attached color='black' content='Select Date' />
      <Calendar
        onChange={(date) => setPredicate('startDate', date)}
        value={predicate.get('startDate') || new Date()}
        tileDisabled={() => loading}
      />
    </>
  )
}
