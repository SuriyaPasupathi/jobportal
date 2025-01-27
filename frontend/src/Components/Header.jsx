import "../SignUp.css";
import { useNavigate } from "react-router-dom";
function Header(){
    const navigate = useNavigate();
   const handleLogin = () => {
    // Perform any login logic here if needed
    navigate("/Employer_Login"); // Navigate to the dashboard page
  };
  const handleLogin2=()=>{
     navigate("/Candidate_Login")
  }
  return(
      <>
        <div className="body">
            <div className="container-header">
                <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.UuiREMxj9OM3cGtGdN1D5QHaFp&pid=Api&P=0&h=180" width="100px" height="90px" />
                </div>
                <div className="navbar">
                    <button className="buttons">Home</button>
                    <button className="buttons">Find jobs</button>
                    <button className="buttons">How it works</button>
                    <button className="buttons">Articles</button>
                    <button className="buttons">contact</button>
                </div>
                <div className="login-button">
                    <button className="job-log1"  onClick={ handleLogin } >Employer Login</button>
                    <button className="job-log1" onClick={ handleLogin2 } >Candidate Login </button>
                </div>
            </div>
                </div>

        </>
    )
}
export default  Header;