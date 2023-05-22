import React from "react";
import  { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";

const listt=[
    {
      id:'a1',
      date:'JUL 16',
      city:'NEW DELHI',
      place:'DTE ENERGY MUSIC THEATRE'
    },
    {
      id:'a2',
      date:'JUL 21',
      city:'NAVI MUMBAI',
      place:'DTE BUDWEISER STAGE'
    },
    {
      id:'a3',
      date:'JUL 25',
      city:'BENGLURU',
      place:'JIGGY LUBE LIVE'
    },
    {
      id:'a4',
      date:'JUL 28',
      city:'AHMEDABAD',
      place:'AK-CHIN PAVILION'
    },
    {
      id:'a5',
      date:'AUG 8',
      city:'INDORE',
      place:'T-MOBILE ARENA'
    },
    {
      id:'a6',
      date:'AUG 12',
      city:'PUNE',
      place:'CONCORD PAVILION'
    },


]

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          height: "18rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "serif",
            fontWeight: "bold",
            fontSize: "5rem",
            marginLeft: "-1rem",
          }}
        >
          The Generics
        </h1>
        <Link to="/store"
          type="button"
          class="btn btn-outline-secondary btn-lg"
          style={{
            color: "white",
            width: "15rem",
            borderColor: "#97c1f6",
            marginTop: "1rem",
          }}
        >
          Get Our Lattest Album
        </Link>
     <div style={{marginTop:'1rem'}}>
     <button style={{height:'60px',borderRadius:'50%',width:'60px' ,color:'skyblue',backgroundColor:'gray',borderColor:'skyblue',fontSize:'1.5rem'}}>
     <FontAwesomeIcon icon={faPlay} />
     {/* <i class="fa-solid fa-play fa-sm" style={{color: "#8ad2ea;"}}></i> */}
     </button>
     </div>
     
      </div>
      <div style={{textAlign:'center'}}>
      <h2 className="border-bottom py-2">TOURS</h2>

       {listt.map((list)=>(
        <div key={list.id} className=" container-md border-bottom py-2" style={{width:'35rem',fontFamily:'serif',fontSize:'14px'}}>
          <div className="row">
            <span className="col">{list.date}</span>
            <span className="col">{list.city}</span>
            <span className="col">{list.place}</span>
            <button style={{color:'white',backgroundColor:'skyblue',fontWeight:'bold',borderRadius:'5px',height:'30px'}} className="btn btn-sm col">BUY TICKETS</button>
            
          </div>

        </div>
       ))}

      </div>
       <div style={{backgroundColor:'skyblue',height:'6rem'}}>
       <h1 style={{marginLeft:'8rem',fontFamily:'serif',color:'white',fontWeight:'bold',marginTop:'3rem'}}>The Generics</h1>
       </div>
      
      
    </div>
  );
}

export default Home;
