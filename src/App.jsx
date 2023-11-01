import { useState } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';


function App() {
  const [userData, setUserData] = useState({})

  const getUserData = async (e) => {
    e.preventDefault();
    let login = e.target[0].value
    if (login !== "None") {
      try {
        const response = await axios.get(`https://api.github.com/users/${login}`)
        console.log(response.data)
        const newObj = { login: response.data.login, avatar: response.data.avatar_url, url: response.data.html_url, followers: response.data.followers, following: response.data.following, reposAmount: response.data.public_repos, name: response.data.name, bio: response.data.bio }
        setUserData(newObj)
      } catch (err) {
        console.log("Something went wrong")
        console.log(err)
      }
    } else {
      setUserData({})
    }

  }

  return (
    <>
      <div className="border-2 p-5 m-10">
        <h1>{userData.login}</h1>
        {userData.avatar && <img src={userData.avatar} alt="profile image" />}
        <ul></ul>
      </div>
      <form onSubmit={getUserData}>
        <select name="user" id="user">
          <option value="None">None</option>
          <option value="theQuiltingRiverOtter">theQuiltingRiverOtter</option>
          <option value="hfilbin10">hfilbin10</option>
        </select>
        <Button variant="primary">Submit</Button>

      </form>
    </>
  )
}

export default App


// GitProfileCard - Username, photo, folowers, link, repos