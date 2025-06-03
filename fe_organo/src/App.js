import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const theNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms theCollaboratorRegistration={collaborator => theNewCollaboratorAdd(collaborator)} />
      <Team name="Front-End" />
      <Team name="Data Science" />
      <Team name="DevOPS" />
    </div>
  );
}

export default App;
