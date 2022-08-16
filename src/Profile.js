import './Profile.css';
import { useState } from 'react';
// import Avatar from './avatar.png'
import { Link} from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [personData, setpersonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const profileHandler = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then( (response) => {
      // console.log(response.data.results);
      setpersonData(response.data.results);
    }).catch((error) => {
      // console.log(error);
      setLoading(true);
    }).finally(() => {
      setLoading(false);
      setActiveProfile(true);
    })
  }
  
  return ( 
    
    <>
    <div className='profile-card'>
      { loading ? <p><i>Loading...</i></p> : <div>
        {
          personData.map((person, index) => {
            return (
              <div className='details' key={person.cell} >
              <img src={person.picture.large} className='user-img' alt='user-img' />
              <p>My name is</p>
              <h2>{person.name.first + ' '+ person.name.last}</h2>
              </div>
            )
          })
        }
      </div>

      }
      <p className='button-div'><button onClick={profileHandler} type='button' className='user-btn' >{activeProfile ? "Get Another Profile" : "Get Profile"}</button></p>
    </div>
    <p className='comment'>Made with <span>❣</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </>

  );
}

export default Profile;
