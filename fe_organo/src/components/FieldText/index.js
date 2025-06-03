import './FieldText.css'

const FieldText = (props) => {

    const typing = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className='field-text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>
    )
}

export default FieldText
