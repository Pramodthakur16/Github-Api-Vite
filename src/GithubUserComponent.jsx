// src/GitHubUserComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';


// eslint-disable-next-line react/prop-types
const GitHubUserComponent = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching GitHub user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      <h2>GitHub User Data</h2>
      {userData && (
        <div>
          <p><strong>Login:</strong> {userData.login}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Created At:</strong> {userData.created_at}</p>
          <p><strong>Updated At:</strong> {userData.updated_at}</p>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Company:</strong> {userData.company}</p>
          <p><strong>Avatar Url:</strong> {userData.avatar_url}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

export default GitHubUserComponent;
