import React, { Component } from 'react'


export default class Ohne extends Component {

  changeValue() {
    var valueElement = document.getElementById('value');
    valueElement.innerText = "My text was changed!";
      }

  render() {
    return (
      <div>
        <p id="value">Change my Value with the button below</p>
        <button onClick={this.changeValue.bind(this)}>Change!</button>
        <div>
          <h1>Cool story bro</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quos exercitationem repudiandae delectus atque laborum ipsa inventore! Nobis molestias quisquam animi facilis! Inventore quisquam explicabo ullam tenetur adipisci, sit alias consequuntur. Culpa sapiente quae dolorem molestias deserunt consequuntur perferendis tempora nihil iure esse libero distinctio, sunt facilis dicta eius excepturi.</p>
        </div>
        <div>
          <h1>Interesting...</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quos exercitationem repudiandae delectus atque laborum ipsa inventore! Nobis molestias quisquam animi facilis! Inventore quisquam explicabo ullam tenetur adipisci, sit alias consequuntur. Culpa sapiente quae dolorem molestias deserunt consequuntur perferendis tempora nihil iure esse libero distinctio, sunt facilis dicta eius excepturi.</p>
        </div>
        <div>
          <h1>What the f***</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quos exercitationem repudiandae delectus atque laborum ipsa inventore! Nobis molestias quisquam animi facilis! Inventore quisquam explicabo ullam tenetur adipisci, sit alias consequuntur. Culpa sapiente quae dolorem molestias deserunt consequuntur perferendis tempora nihil iure esse libero distinctio, sunt facilis dicta eius excepturi.</p>
        </div>
        <div>
          <h1>Let's get started</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quos exercitationem repudiandae delectus atque laborum ipsa inventore! Nobis molestias quisquam animi facilis! Inventore quisquam explicabo ullam tenetur adipisci, sit alias consequuntur. Culpa sapiente quae dolorem molestias deserunt consequuntur perferendis tempora nihil iure esse libero distinctio, sunt facilis dicta eius excepturi.</p>
        </div>
      </div>
    )
  }
}