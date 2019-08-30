import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { Card } from 'semantic-ui-react'

import { Container } from './styled'
import Reservation from '../Reservation'

const ReservationList = ({ reservations }) => (
    <Container>
        <Card.Group itemsPerRow={1} centered doubling textAlign='center'>
            {reservations.map(reservation => (
                <Reservation 
                    {...reservation}
                />
            ))}
        </Card.Group>
    </Container>
)

ReservationList.propTypes = {
    reservation: arrayOf(shape({
        imageUrl: string.isRequired,
        name: string.isRequired,
        direction: string.isRequired
    }))
}
export default ReservationList