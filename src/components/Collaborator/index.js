import './Collaborator.css'

const Collaborator = ({ name, image, position, backColor }) => {
    return (<div className='collaborator'>
        <div className='head' style={{ backgroundColor: backColor }}>
            <img src={image} alt={name} />
        </div>
        <div className='foot'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div >)
}

export default Collaborator