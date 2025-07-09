import React from 'react';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact our team</h1>
        <p>Got questions about Pokémon? Our lab assistants are here to help!</p>
      </div>

      
       

        {/* Contact Methods */}
        <div className="contact-methods">
          <div className="contact-card">
            <div className="card-header">
              <h2>Other Ways to Connect</h2>
              
            </div>

            <div className="method">
              <div className="method-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>India: +91 9196975261</p>
                {/* <p>Emergency (Poké Center): (555) 987-6543</p> */}
              </div>
            </div>

            <div className="method">
              <div className="method-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>General: akashbhatia7766@gmail.com</p>
                <p>Support: support@pokemon.com</p>
              </div>
            </div>

            <div className="method">
              <div className="method-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>Pokemon project team</p>
                <p>Hoshiarpur, Punjab, India</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Our Journey</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🎥</a>
                <a href="#" className="social-icon">💻</a>
              </div>
            </div>
          </div>
        </div>
      

   
    </div>
  );
};

export default Contact;