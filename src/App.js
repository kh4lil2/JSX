import logo from './logo.svg';
import './App.css';
import './style.css';
import image from "./image.png"
import Video from "./vds.mp4"
function App() {
  return (
  <>
    <div style={{border:"solid 1px black", maxWidth:"100vw" , paddingLeft:"200px"}}>

    <h1 className="titlered">khalil Rafrafi</h1>
   
    <br ></br>   
    <img className="im" src={image}  alt=""/>
    
    <img className="im" src='/img.png'  alt=""/>
</div>   

<video className="vd" width="320" height="240" controls>

 <source  src={Video} type="video/mp4" ></source>
   </video>
   
   </>
  );
}

export default App;
