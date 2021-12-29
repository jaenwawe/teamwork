
const Solution = ({key, solution}) => {

  return (
    <div className="card">
            <h2>{solution.questions}</h2>
            <h2>{solution.hints}</h2>
            <h2>{solution.explaination}</h2>
    <br/>
    </div>
  );
};

export default Solution;