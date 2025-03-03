// write the component code here
import React from 'react';

const Usercard = () => {
  const profilePhoto =
    'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg';
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const phone = '+1 234 567 890';
  const address = '123 Main St, Anytown, USA';

  // Inline styles (optional)
  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textAlign: 'center',
    margin: '16px auto',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <img src={profilePhoto} alt="Profile" style={imageStyle} />
      <h2>{name}</h2>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
    </div>
  );
};

export default Usercard;
