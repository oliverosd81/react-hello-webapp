import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import imgContact from "../../img/darthvader.webp";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser("rikrdoLeal");
    actions.getContacts("rikrdoLeal");
  }, []);

  console.log(store.contacts.contacts);

  if (!(store.contacts && store.contacts.contacts)) return null;

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-center">Lista de Contactos</h1>

        {
          
          store.contacts.contacts.map(item =>

          <div className="card mb-0" key={item.id} style={{ width: "auto", margin: "0 30px" }}>
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src={imgContact} className="rounded-circle img img-thumbnail" alt="" style={{maxHeight: "200px"}} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.address}</p>
                  <p className="card-text">{item.phone}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {item.email}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                botones
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

        /* {
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
          )} */
  )
}
