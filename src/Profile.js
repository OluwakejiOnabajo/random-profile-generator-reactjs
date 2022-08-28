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
    // Display loading text while fetching profile
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then( (response) => {
      // console.log(response.data.results);
      setpersonData(response.data.results);
    }).catch((error) => {
      console.log("Error: ", error);
      // Display error message while fetching profile
      setLoading(true);
    }).finally(() => {
      // Hide loading text while fetching profile
      setLoading(false);
      setActiveProfile(true);
    })
  }
  
  return ( 
    
    <>
    <div className='profile-card'>
      <div className='details'>
      { loading ?
      // Show loading when getting profile
      <p><i>Loading...</i></p> 
      : 
      <div>
        {
        // Show profile detail after loading
          personData.map((person, index) => {
            return (
              <div key={person.cell} >
              <img src={person.picture.large} className='user-img' alt='user-img' />
              <p>My name is</p>
              <h2>{person.name.first + ' '+ person.name.last}</h2>
              </div>
            )
          })
        }
      </div>
      }
      </div>
      {/* Display "Get Profile" on start and "Get Another Profile" to get another random profile */}
      <button onClick={profileHandler} type='button' className='user-btn' >{activeProfile ? "Get Another Profile" : "Get Profile"}</button>
    </div>

    {/* Footer */}
    <p className='comment'>Made with <span>❣</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </>

  );
}

export default Profile;
