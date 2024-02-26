

export default function Game(props){





    return(
        <div>
        <h1>Guess the Song</h1>
    

        <div className="jumbotron">
          <p className="lead">Instructions: Play the song clip. Then, type the song title all lowercase with no spaces.</p>
         </div>
      
      
      <section id="musicPlayer">
          
  
  
       <div className="container">
        <SongGuess />
        <SongGuess />
        <SongGuess />


           
         
        <div className="row leader">
          <div className="col-6 mx-auto my-4 leader">
            {/* <a class="member-btn trade" href=/leaderboard> View Leadboard </a> */}
          </div>
         </div>
   
            
         
        
          
    
       </div>
      </section>
      </div>
    )
}

function SongGuess(props){
  return (
    <div className="row mb-4">
            <div className="col d-flex justify-content-center"> 
               {/* <!-- <div class="card" id="white-bg" > 
                 <div class="card-body d-flex" id="white-bg" >   --> */}
                    <div className="row">
                      <div className="col-auto">
                        <img src="photos/game/Play.png" alt="play audio"></img>
                      </div>
                      <div className="col-auto">
                       <img src="photos/game/Player.png" alt="song image"></img>
                      </div>
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <form className="input-group">
                           <textarea className="form-control" aria-label="Write name of song"></textarea>
                          </form>
                      </div>
                                          
                                 
                      <div className="col">
                        <a className="member-btn trade" aria-label="submit">Submit</a>
                     </div>
                    </div>
                  </div>
                </div>
  )
}