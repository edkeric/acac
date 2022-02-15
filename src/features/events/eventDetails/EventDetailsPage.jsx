import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { listenToEventFromFirestore } from '../../../app/firestore/firestoreService'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import { listenToEvents } from '../event.Actions'
import EventDetailsChat from './EventDetailsChat'
import EventDetailsHeader from './EventDetailsHeader'
import EventDetailsInfo from './EventDetailsInfo'
import EventDetailsSidebar from './EventDetailsSidebar'
// import LoadingComponent from '../../../app/layout/LoadingComponent'

export default function EventDetailsPage({ match }) {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.auth)
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  )
  // const {loading} = useSelector((state) => state.async)
  const isHost = event?.hostUid === currentUser.uid
  const isGoing = event?.att?.some((a) => a.id === currentUser.uid)

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
  })

  // if (loading || (!event && !error))
  //   return <LoadingComponent content='Loading event...' />
  // if (error) return <Redirect to='/error' />

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} isGoing={isGoing} isHost={isHost} />
        <EventDetailsInfo event={event} />
        <EventDetailsChat />
      </Grid.Column>

      <Grid.Column width={6}>
        <EventDetailsSidebar att={event?.att} hostUid={event.hostUid} />
      </Grid.Column>
    </Grid>
  )
}
