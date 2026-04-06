import {Link, link} from "react-router-dom";
function Navbar(){
    return (  
        <nav style={styles.nav}>
        <h2>Notes App</h2>
        <div>
            <Link to = "/" style = {styles.link}>Home</Link>
            <Link to = "/add" style = {styles.link}>Add Note</Link>
        </div>
        </nav>
    );
}
const styles ={
    nav:{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
    },
    link:{
        marginLeft:"15px",
        color:"#fff",
        textDecoration : "none",
    },
}; 
export default Navbar;