import { useState } from 'react'
import Button from '../Button'
import FieldText from '../FieldText'
import Selection from '../Selection'
import './Forms.css'

const Forms = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const Save = (event) => {
        event.preventDefault() //Event that block website reload the page
        props.theCollaboratorRegistration({
            name,
            position,
            image,
            team
        })
    }

    return ( //onSubmit: checks if the button was clicked and executed the function
        <section className='forms'>
            <form onSubmit={Save}>
                <h2>Fill in the data to create the employee card.</h2>
                <FieldText
                    mandatory={true}
                    label="Name"
                    placeholder="Write your name"
                    value={name}
                    changed={value => setName(value)}
                />

                <FieldText
                    mandatory={true}
                    label="Position"
                    placeholder="Write your position"
                    value={position}
                    changed={value => setPosition(value)}
                />

                <FieldText
                    label="Image"
                    placeholder="Write the address of your image"
                    value={image}
                    changed={value => setImage(value)}
                />

                <Selection
                    mandatory={true}
                    label="Team"
                    itens={props.nameTeams}
                    value={team}
                    changed={value => setTeam(value)}
                />

                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Forms