import React from 'react';
import './About.css';

// Import profile images (replace with actual paths);
import Profile1 from '../assets/ash.jpg';
import Profile2 from '../assets/arven.jpg';
import Profile3 from '../assets/henry.jpg';
import Profile4 from '../assets/ortega.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Akash Bhatia",
      class: "BCA 6th",
      rollNo: "2224872",
      image: Profile1,
      type: "Electric",
      bio: "Team leader"
    },
    {
      id: 2,
      name: "Arshdeep Kalsi",
      class: "BCA 6th",
      rollNo: "2224881",
      image: Profile2,
      type: "Water",
      bio: "Team member"
    },
    {
      id: 3,
      name: "Puneet Kumar",
      class: "BCA 6th",
      rollNo: "2224928",
      image: Profile3,
      type: "Rock",
      bio: "Team member"
    },
    {
      id: 4,
      name: "Sumit Chaudhary",
      class: "BCA 6th",
      rollNo: "2224946",
      image: Profile4,
      type: "Normal",
      bio: "Team member"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1><span className="pokeball-icon"></span> Meet Our PokéTeam</h1>
        <p>The trainers who made this Pokédex possible</p>
      </div>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className={`profile-card ${member.type.toLowerCase()}`}>
            <div className="card-inner">
              <div className="card-front">
                <div className="profile-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="profile-image"
                  />
                
                </div>
                <h2>{member.name}</h2>
                <div className="profile-info">
                  <p><strong>Class:</strong> {member.class}</p>
                  <p><strong>ID No:</strong> {member.rollNo}</p>
                </div>
              </div>
              <div className="card-back">
                <h3>About {member.name.split(' ')[0]}</h3>
                <p>{member.bio}</p>
                <div className="stats">
                  <span>🔥 85</span>
                  <span>💧 76</span>
                  <span>⚡ 92</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-mission">
        <h2>Our PokéMission</h2>
        <div className="mission-content">
          <div className="mission-text">
          <p>"To catch 'em all with cutting-edge technology"</p>
          <p>"Making Pokémon discovery effortless for every trainer"</p>
          </div>
          <div className="mission-image">
            {/* Placeholder for a team image or Pokémon sprite */}
            <div className="pikachu-sprite">🐾</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;