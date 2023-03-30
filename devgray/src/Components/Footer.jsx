import React from 'react'
const today = new Date();
const Footer = () => {
  return (
    <footer>
        <p>
            Copyright &copy;{today.getFullyear()}
        </p>

    </footer>
  )
}

export default Footer