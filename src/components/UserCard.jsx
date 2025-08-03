import React from 'react'

function UserCard({user}) {
    const {firstName, lastName, about, age, gender, photoUrl} = user;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={photoUrl}
        alt="photo" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName + " " + lastName}</h2>
      <p>{age && gender && age + " " + gender}</p>
      <p>{about}</p>
      <div className="flex card-actions justify-center my-4">
        <button className="btn bg-red-500">Ignore</button>
        <button className="btn bg-green-500">Interested</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard