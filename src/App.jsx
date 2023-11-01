import { useState } from 'react'
import axios from "axios"
import MyNavBar from './Components/MyNavBar';
import MyModal from './Components/MyModal';
import "./App.css"




function App() {
  const [userData, setUserData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [searchLogin, setSearchLogin] = useState("")

  const getUserData = async (e) => {
    setShowModal(true)
    e.preventDefault();
    let login = e.target.value
    if (login !== "None") {
      try {
        const response = await axios.get(`https://api.github.com/users/${login}`)
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

  const hideModal = () => {
    setShowModal(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowModal(true)
      const response = await axios.get(`https://api.github.com/users/${searchLogin}`)
      const newObj = { login: response.data.login, avatar: response.data.avatar_url, url: response.data.html_url, followers: response.data.followers, following: response.data.following, reposAmount: response.data.public_repos, name: response.data.name, bio: response.data.bio }
      setUserData(newObj)
    } catch (err) {
      setShowModal(false)
      console.log("Something went wrong")
      console.log(err)
    }

  }

  const handleChange = (e) => {
    setSearchLogin(e.target.value)
  }


  return (
    <>
      <MyNavBar getUserData={getUserData} handleSubmit={handleSubmit} handleChange={handleChange} />
      {showModal && <MyModal userData={userData} hideModal={hideModal} />}
    </>
  )
}

export default App


