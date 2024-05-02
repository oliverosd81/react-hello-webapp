import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const CreateContact = () => {
  const { actions } = useContext(Context);

  console.log("actions", actions);
  // console.log("store", store);

  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    actions.saveContact(contactData);
  };

  return (
    <div>
      <h1>Create new contact:</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={contactData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={contactData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Correo electrónico"
          value={contactData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={contactData.address}
          onChange={handleChange}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
