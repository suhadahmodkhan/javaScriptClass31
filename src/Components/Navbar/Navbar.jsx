import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
const Navbar = () => {
    const navigate = useNavigate()
const handleLogOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/login")
      }).catch((error) => {
        // An error happened.
      });
}
    return ( 
        <div>
<div className="flex justify-between items-center">
    <figure>
    <img src="https://i.postimg.cc/JnhQ52t2/Logo.png" alt="" />
    </figure>

    <div className="flex gap-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/statictics">Statictics</Link>
        <button onClick={handleLogOut}>Log out</button>
        
            </div>
</div>
<Outlet/>
     </div>
    )
}
export default Navbar ;