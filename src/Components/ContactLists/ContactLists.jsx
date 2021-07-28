import React from "react";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import { ContactList, ContactListItem } from "./ContactLists.styles";

function ContactLists({ contacts, onDeleteContact }) {
  function handelDelete(id) {
    console.log(111);
    // e.preventDefault();
    console.log(id);
    // onDeleteContact(id);
  }
  return (
    <ContactList>
      <Button type="button" text="Delete" onClick={(e) => handelDelete(e)} />
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={uuidv4()}>
          {name} {number}
          <Button
            key={id}
            type="button"
            text="Delete"
            onClick={(id) => handelDelete(id)}
          />
        </ContactListItem>
      ))}
    </ContactList>
  );
}

export default ContactLists;
