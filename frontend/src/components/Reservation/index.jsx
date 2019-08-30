import React from 'react'
import { string } from 'prop-types'
import { Button, Card, Image } from 'semantic-ui-react'

import { Container } from './styled'

const Reservation = ({ imageUrl, name, direction }) => (
    <Container>
        <Card fluid>
            <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={imageUrl}
            />
            <Card.Header>{name}</Card.Header>
            <Card.Description>
                {direction}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button basic primary>Reservar</Button>
            </Card.Content>
        </Card>
    </Container> 
  )
  

Reservation.propTypes = {
    imageUrl: string.isRequired,
    name: string.isRequired,
    direction: string.isRequired
}
export default Reservation