import { useHistory } from 'react-router-dom'
import { useSelector} from "react-redux"; 

function Challenge ({key, challenge}){
    const history = useHistory()
    const challenges = useSelector((state) => state.challenges.challenges);
    return (
      <div className="card">
        <h2 className="middle">{challenge.title}</h2>
        <h2 className="left">{challenge.question}</h2>
      
        <br />
        <button
          onClick={() => history.push(`/solutions/${challenge.id}`)
        }>
            Solutions</button>

      </div>
    );
};

export default Challenge
