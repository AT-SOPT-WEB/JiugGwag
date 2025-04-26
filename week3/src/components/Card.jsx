import React from 'react'


const NameKo = ({ name }) => {
  return <p>이름 : {name}</p>
}

const NameEn = ({ name }) => {
  return <p>영문이름{name}</p>
}

const GithubId = ({ id }) => {
  return <p>깃허브{id}</p>
}


const Card ={
    NameKo,
    NameEn,
    GithubId
}




export default Card
