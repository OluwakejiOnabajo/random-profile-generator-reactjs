import './Profile.css';
import { useState } from 'react';
// import Avatar from './avatar.png'
import { Link} from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [personData, setpersonData] = useState();
  const [activeProfile, setActiveProfile] = useState(false);

  const profileHandler = () => {
    axios.get('https://randomuser.me/api/')
    .then( (response) => {
      // Set profile data
      setpersonData(response.data.results);
    }).catch((error) => {
      // Display error message while fetching profile
      console.log(error.message);
    }).finally(() => {
      // Hide loading text while fetching profile
      // console.log("working");
    })
  }

  if (personData) {
        // Change button text to "Get another user"
    setActiveProfile(true);    
  }
  
  return ( 
    
    <>
    <div className='profile-card'>
      <div className='details'>
        {
           personData ? 
          personData.map((person, index) => {
            return (
              <div key={person.cell} >
              <img src={person.picture.large} className='user-img' alt='user-img' />
              <p>My name is</p>
              <h2>{person.name.first + ' '+ person.name.last}</h2>
              </div>
            )
          }) :
          // Show loading when getting profile
          <p><i>Loading...</i></p> 
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
