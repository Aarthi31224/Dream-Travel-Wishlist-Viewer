import {useState} from "react";
function Form({user,setPage}){

const [place,setPlace]=useState("");
const [state,setState]=useState("");
const [district,setDistrict]=useState("");
const [map,setMap]=useState("");
const [destination,setDestination]=useState("");

function add(){

if(place==="" || destination===""){
alert("Place and Destination Required");
return;
}

let data =JSON.parse(localStorage.getItem(user))|| [];
data.push({
place,
state,
district,
map,
destination,
visited:false
});
localStorage.setItem(user,
JSON.stringify(data));
setPage("cards");
}
return(
<div className="form-page"> 
<div className="box2">
<button className="form-btn1" onClick={()=>setPage("cards")}>Destination Card</button>

<button  className="logout"onClick={()=>setPage("login")}>Logout</button>
<h3>Welcome to {user} Wishlist Viwer</h3>
<h3>Wishlist Destination Notes</h3>

<input placeholder="* Place "onChange={(e)=>setPlace(e.target.value)}/>
<input placeholder="* State"onChange={(e)=>setState(e.target.value)}/>
<input placeholder="* District"onChange={(e)=>setDistrict(e.target.value)}/>
<textarea placeholder="Map Link"onChange={(e)=>setMap(e.target.value)}/>
<textarea placeholder="About Destination"onChange={(e)=>setDestination(e.target.value)}/>
<br/>
<button className="form-btn1" onClick={add}>Add</button>
</div>
</div>
)
}

export default Form;