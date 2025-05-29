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

    return (
        <section className='forms'>
            <form>
                <h2>Fill in the data to create the employee card.</h2>
                <FieldText label="Name" placeholder="Write your name" />
                <FieldText label="Position" placeholder="Write your position" />
                <FieldText label="Image" placeholder="Write the address of your image" />
                <Selection label="Team" itens={teams} />
            </form>
        </section>
    )
}

export default Forms