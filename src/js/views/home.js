import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);
  
  useEffect(() => {
    actions.getContacts("rikrdoLeal");
  }, []);

  console.log(store.contacts.contacts);
  
  if (!(store.contacts && store.contacts.contacts)) return null;

  return (
    <div className="text-center mt-5">
        <div>
          <h1>Lista de Contactos</h1>
          {
          store.contacts.contacts.map(item =>
          <ul key={item.id}>
                <li>
                  {item.name}
                </li>
                <li>
                  {item.phone}
                </li>
                <li>
                  {item.email}
                </li>
                <li>
                  {item.address}
                </li>
          </ul>
          )}
        </div>
    </div>
  );
};
