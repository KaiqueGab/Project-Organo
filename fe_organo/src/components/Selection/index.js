import './Selection.css'

const Selection = (props) => {

    return (
        <div className='selection'>
            <label>{props.label}</label>
            <select value={props.value} required={props.required} onChange={event => props.changed(event.target.value)}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Selection