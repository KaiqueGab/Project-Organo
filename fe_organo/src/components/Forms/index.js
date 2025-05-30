import { useState } from 'react'
import Button from '../Button'
import FieldText from '../FieldText'
import Selection from '../Selection'
import './Forms.css'

const Forms = () => {

    const teams = [
        'Programming',
        'Front-End',
        'Data Science',
        'DevOPS',
        'UX and UI',
        'Mobile',
        'Inovation and Management'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const Save = (event) => {
        event.preventDefault() //Event that block website reload the page
        console.log('Form was submited =>', name, position, image, team)
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
                    Changed={value => setName(value)}
                />

                <FieldText
                    mandatory={true}
                    label="Position"
                    placeholder="Write your position"
                    value={position}
                    Changed={value => setPosition(value)}
                />

                <FieldText
                    label="Image"
                    placeholder="Write the address of your image"
                    value={image}
                    Changed={value => setImage(value)}
                />

                <Selection
                    mandatory={true}
                    label="Team"
                    itens={teams}
                    value={team}
                    Changed={value => setTeam(value)}
                />

                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Forms