import styled from "styled-components"
import image from "./media/bg2.jpg" 


function App() {
  return ( 
    // <br/>      <br/> 
   <StyledApp>
      <header>
        <img src={image}  />
    </header> 

    <form>
      <div>
        <label>
          
          <input type="text" placeholder="Your Team Name"></input>
         </label>
        
       
        <label>
             
          <input type="text" placeholder="Your Name"></input>         
        </label>
        
        
        <label>
         
          <input type="password" placeholder="Create Password" ></input>
        </label>
        
        <div>

       <button>
        Next
        </button>
        </div>
      </div>
    </form>
       </StyledApp>
      
    
  )
}

const StyledApp = styled.div`
  width: 100%;
  height: 100vh; 
  background:grey;
  position: relative;
    
  header {
    width: 100%;
    height: 100%; 
    margin:0px;
    overflow:hidden;
    background:grey;
  }
  img{
    width:100%;
    height:100%;

    margin=0px;
   
  }
  form {
    position: absolute;
    top: 25%;
    left: 55%;
    display:flex;
    height:40%;
    width:17%;
    
    
    

  }
  
  label{
    display:block;    
    background: rgba(0 0 0 0);
    margin:10px;
    
    
    
   
    

  }
  input, text-area{

   
    width: 100%;
    background:transparent;
    border:none;
    border-bottom:solid black;
    padding:3px;
    

    
    
    
  
    
  }
  button{
  background:orange;
  position:relative;
  left:70%;
  
 
  
  border-radius: 25px;
  border:none;
  padding:3px;
  max-width:50px;
  width:100%;
  margin:7px;

  
    }


`




export default App;

/*Comment
form


*/