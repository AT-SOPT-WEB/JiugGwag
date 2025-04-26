import './App.css'
import Card from './components/Card'
import { members } from './mock/member'

function App() {
  return (
    <>
      <div>
        {members.map((member) => (
          <div className='card__container' key={member.id}>
            <Card.NameKo name={member.name} />
            <Card.NameEn name={member.englishName} />
            <Card.GithubId id={member.github} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App