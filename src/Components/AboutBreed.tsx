import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const AboutBreed = () => {
    const parameter = useParams<string>();
    console.log(parameter)

  return (
    <div>
        <Link to="/">Go Back</Link>
      Hello More
    </div>
  )
}

export default AboutBreed
