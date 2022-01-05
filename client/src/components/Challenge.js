import { useHistory } from 'react-router-dom'
import { useSelector} from "react-redux"; 

function Challenge ({key, challenge}){
    const history = useHistory()
    const challenges = useSelector((state) => state.challenges.challenges);
    return (
      <div className="card">
        <h2 className="middle">{challenge.title}</h2>
        <h2 className="alignleft">{challenge.question}</h2>
      
        <br />
        <button
          onClick={() => history.push(`/solutions/${challenge.id}`)
        }  className="center middle">
            Solutions</button>

      </div>
    );
};

export default Challenge
