
import './MailList.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MailList = () => {

  const handleSubmit = () =>{
      toast.success("Email Submitted",{
        theme:"dark"
      })
  }

  return (
    <div className='mail'>
      <ToastContainer autoClose={2000}/>
     <h1 className="mailTitle">Save time, save money!</h1>
     <span className="mailDesc">Sign up and we'll send the best deal to you</span>
     <div className="mailInputContainer">
        <input type="text" placeholder='Your Email' />
        <button onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  )
}

export default MailList
