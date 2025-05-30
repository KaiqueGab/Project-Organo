import './Selection.css'

const Selection = (props) => {

    const type = (event) => {
        props.Changed(event.target.value)
    }

    return (
        <div className='selection'>
            <label>{props.label}</label>
            <select value={props.value} required={props.mandatory} onChange={type}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Selection