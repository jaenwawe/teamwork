
const Solution = ({key, solution}) => {
   const question =       <div> <h2  className="alignleft">Question:</h2>   <h2 className="alignright"> {solution.questions}</h2> </div> 
   const hint =           <div> <h2  className="alignleft">Hint:</h2>        <h2 className="alignright"> {solution.hints}</h2> </div>  
   const explaination =   <div> <h2  className="alignleft">Solution:</h2>    <h2 className="alignright"> {solution.explaination}</h2> </div> 
   
   


  return (
    <div className="card">
         {solution.questions   ? question : null }
         {solution.hints   ? hint : null }
         {solution.explaination   ? explaination : null }
    </div>
  );
};

export default Solution;