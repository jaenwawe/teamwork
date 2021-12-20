return (

    <div className="App">
        <h1>App</h1>
        
          <BrowserRouter>
            <Switch>
            <Route path="/login"><Login/>  </Route>
            <Route exact path="/"><Login /> </Route> 
            <Route path="/challenges"> <ChallengeArr/> </Route>
            <Route path="/challenges"><ChallengeArr/></Route>
          </Switch>
        </BrowserRouter> 
    </div>
  );