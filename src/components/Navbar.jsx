function Navbar(props){

   return (
    <div className="nav">
        <b>Ironhack Electronics Store</b>
        <img src={props.logo}/>
    </div>
   )

}

export default Navbar;