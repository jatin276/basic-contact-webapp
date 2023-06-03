import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      number={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://cdn.pixabay.com/photo/2018/04/04/13/09/selfi-3289755_1280.jpg" />

      {contacts.map(createCard)}
      {/* <Card
      name={contacts[0].name}
      img = {contacts[0].imgURL}
      number = {contacts[0].phone}
      email = {contacts[0].email}
      />
       <Card
      name={contacts[1].name}
      img = {contacts[1].imgURL}
      number = {contacts[1].phone}
      email = {contacts[1].email}
      />
       <Card
      name={contacts[2].name}
      img = {contacts[2].imgURL}
      number = {contacts[2].phone}
      email = {contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
