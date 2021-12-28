
const Solution = ({key, solution}) => {

  return (
    <div className="card">
      <h1>Solution Title</h1>
      <h2>{solution.hint}</h2>
      <h2>{solution.question}</h2>
      <h2>{solution.explaination}</h2>
      <img src={solution.image_url} alt={solution.title}></img>
      
    <br/>

    </div>
  );
};

export default Solution;