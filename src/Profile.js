import './Profile.css';
import { useState } from 'react';
import Avatar from './avatar.png'
import { Link} from "react-router-dom";

const Profile = () => {
  // const [firstname, setFirstname] = useState('');
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const profileHandler = () => {
    setLoading(true);
    axios.get('https:')
    .then( (response) => {
      console.log(response.data.result);
      setProfileData(response.data.result);
    }).catch((error) => {
      console.log(error);
      setLoading(true)
    }).finally(() => {
      setLoading(false);
    })
  }
  
  return ( 
    
    <>
    <div className='profile-card'>
      <img src={Avatar} className='user-img' alt='user-img' />
      <p>My name is</p>
      <h2>Oluwakeji Onabajo</h2>
      <button onClick={profileHandler} type='button' className='user-btn' >{activeProfile ? "Get Another Profile" : "Get Profile"}</button>
    </div>
    <p className='comment'>Made with <span>❣</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </>

  );
}

export default Profile;
