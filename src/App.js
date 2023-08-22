import { useEffect, useState } from "react";
import { FaGoogle,FaFacebook,FaGithub,FaPhone,FaLock } from "react-icons/fa";
import { auth } from "./firebase";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";



import { googleSignIn, facebookSignIn, logout, githubSignIn } from "./firebase/auth";


const Button = ({ onClick, children ,classname}) => (
  <button
    onClick={onClick}
    className={classname}
  >
    {children}
  </button>
);

function App() {
const photp="5678";
const [phone, setPhone] = useState("");
const [otp, setOtp] = useState("");



const sendOtp = async() => {
  try{
  
    console.log(photp)
    
  }
    catch(error){
      console.log(error)
    }
  };
const verifyOtp = () => {

alert("otp verified")

};





  console.log(auth?.currentUser)
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setUser(user);
      }
      else {
        setUser(null);
      }
    });
  }, []);




  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
      {
        user != null ?
          <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-center gap-5">
            <div className="grid grid-cols-4">
              <div className="col-span-1 w-20 h-20 bg-green-400 rounded-full">
                <img src={auth?.currentUser?.photoURL} alt="profile" className="w-20 h-20 object-cover rounded-full" />
              </div>
              <div className="col-span-3 flex flex-col px-5">
                <span className=" font-bold text-2xl">{user?.displayName}</span>
                <span className=" font-regular text-sm">{user?.email}</span>
                <button onClick={() => { logout() }} className="w-fit bg-red-500 px-3 py-1 my-2 rounded-sm text-sm font-bold text-white">Logout</button>
              </div>

            </div>
          </div>
          :
          <>
          <div className="p-10 bg-gray-200 rounded-lg flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-5" >
          
              <input type="number" 
              placeholder="Enter Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
               className="rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
              <button onClick={sendOtp} className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 flex justify-center gap-2 rounded"><FaPhone className="text-2xl"/>Send Otp</button>
            
            <div id="recaptcha">

            </div>

              <input type="number" 
              placeholder="Enter Otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
               className="rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
               <button onClick={verifyOtp} className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 flex justify-center gap-2 rounded"><FaLock className="text-2xl"/>Confirm Otp</button>
              


            </div>
             
              
      
              
            </div>
            <div className="p-10 bg-gray-200 rounded-lg flex flex-col justify-center gap-5">
              <Button classname={"bg-red-500  hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center gap-2 rounded"}  onClick={() => googleSignIn()}><FaGoogle className="text-2xl"/>Sign in with Google</Button>
              
              <Button classname={"bg-blue-900 drop-shadow-xl hover:bg-blue-500 text-white font-bold py-2 px-4 flex  justify-center gap-2 rounded"} onClick={() => facebookSignIn()}><FaFacebook className="text-2xl"/>Sign in with Facebook</Button>

              <Button classname={"bg-gray-900 drop-shadow-xl hover:bg-gray-500 text-white font-bold py-2 px-4 flex  justify-center gap-2 rounded"} onClick={() => githubSignIn()}><FaGithub className="text-2xl"/>Sign in with Github</Button>
              
            </div>

          

          </>
      }

    </div>

  );
}

export default App;
