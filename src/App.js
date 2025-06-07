import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';
import Footer from './Footer';

function App() {

  const teams = [
    {
      name: 'Programming',
      colorPrimary: '#57C278',
      colorSecundary: '#D9F7E9',
    },
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecundary: '#E8F8FF',
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecundary: '#F0F8E2',
    },
    {
      name: 'DevOPS',
      colorPrimary: '#E06B69',
      colorSecundary: '#FDE7E8',
    },
    {
      name: 'UX and UI',
      colorPrimary: '#DB6EBF',
      colorSecundary: '#FAE9F5',
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecundary: '#FFF5D9',
    },
    {
      name: 'Inovation and Management',
      colorPrimary: '#FF8A29',
      colorSecundary: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const theNewCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms nameTeams={teams.map(team => team.name)} theCollaboratorRegistration={collaborator => theNewCollaboratorAdd(collaborator)} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        colorPrimary={team.colorPrimary}
        colorSecundary={team.colorSecundary}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}

      <Footer />

    </div>
  );
}

export default App;
