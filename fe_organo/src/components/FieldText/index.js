import './FieldText.css'

const FieldText = (props) => {

    const type = (event) => {
        props.Changed(event.target.value)
    }

    return (
        <div className='field-text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={type} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>
    )
}

export default FieldText
