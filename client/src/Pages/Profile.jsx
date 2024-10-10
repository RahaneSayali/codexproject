import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export default function Profile() {
  const [profile, setProfile] = useState([]);
  const {id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5000/${id}`).then((user)=>{
      setProfile(user.data);
      console.log(profile);

    }).catch((error)=>{
    })

  },[])
  return (
<>
<div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">LeetCode Profile</h2>
      <div className="space-y-2">
        <p><strong>Username:</strong> {id}</p>
        <p><strong>Ranking:</strong> {profile.ranking}</p>
        <p><strong>Total Problems Solved:</strong> {profile.totalSolved}</p>
        <p><strong>Easy Problems Solved:</strong> {profile.easySolved}</p>
        <p><strong>Medium Problems Solved:</strong> {profile.mediumSolved}</p>
        <p><strong>Hard Problems Solved:</strong> {profile.hardSolved}</p>
      </div>
    </div>
</>
  )
}
