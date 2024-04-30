const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: null,
      contacts: [],
    },

    actions: {
      // Funcion para guardar contacto
      saveContact: async (contactData) => {
        try {
          console.log("Saving contact", contactData);

          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/rikrdoLeal/contacts",
            {
              method: "POST",
              body: JSON.stringify(contactData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("Server answer", data);
          alert("Contact successfully created.");
          window.location.href = "/";
          return data;
        } catch (error) {
          console.error("Error saving contact:", error);
          throw new Error("Error saving contact");
        }
      },

      // Función para obtener los contactos guardados en la API
      createUser: async (userId) => {
        const getUser = getActions().getUser;

        await fetch(`https://playground.4geeks.com/contact/agendas/${userId}`, {
          method: "POST",
        }).then((resp) => {
          if (resp.ok) {
            alert("User created successfully");
            getUser(userId);
          }
        });
      },

      getUser: async (userId) => {
        const createUser = getActions().createUser;
        await fetch(`https://playground.4geeks.com/contact/agendas/${userId}`)
          .then((resp) => {
            if (!resp.ok) {
              createUser(userId);
            }
            return resp.json();
          })
          .then((user) => {
            setStore({ user: user });
          })
          .catch((err) => console.log(err));
      },

      getContacts: async (userId) => {
        const store = getStore();
        const resp = await fetch(
          `https://playground.4geeks.com/contact/agendas/${userId}/contacts`,
          {
            method: "GET",
            body: JSON.stringify(),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await resp.json();
        setStore({ contacts: data });
      },
    },
  };
};

export default getState;
