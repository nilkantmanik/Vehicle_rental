import React, { useState } from 'react';
import axios from 'axios';

// Import Navbar

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',
    PhoneNumber: '',
    Age: '',
    Password: '',
    Role: '',
    Uphoto: null,
    Aphoto: null,
    Lphoto: null,
  });

  // Function to handle input changes
  const onChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your registration logic here, using formData

    try {
      
      const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
      console.log(response.data);
    } catch (error) {
      // Handle error, e.g., display an error message

      console.error('Error registering user:', error);
    }
  };

  return (
    <div style={{ backgroundImage: 'url("your-background-image-url")', backgroundSize: 'cover', height: '100vh' }}>
      
      <div className="container">
        <form  onSubmit={handleSubmit}>
          <div >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="UserName" value={formData.UserName} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div >
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" name="Email" value={formData.Email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div >
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" name="Password" value={formData.Password} onChange={onChange} />
          </div>
          <div >
            <label htmlFor=" PhoneNumber" className="form-label">
            PhoneNumber
            </label>
            <input type="text" className="form-control" name="PhoneNumber" value={formData.PhoneNumber} onChange={onChange} />
          </div>
          <div >
            <label htmlFor="Age" className="form-label">
            Age
            </label>
            <input type="text" className="form-control" name="Age" value={formData.Age} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="Role" className="form-label">
            Role
            </label>
            <input type="text" className="form-control" name="Role" value={formData.Role} onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          {/* <Link to="/login" className="m-3 mx-1 btn btn-danger">
            Already a user
          </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
