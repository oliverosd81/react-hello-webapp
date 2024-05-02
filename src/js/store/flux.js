const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: "rikrdoLeal",
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

      // función para crear el usuario
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

      // Función para obtener los contactos guardados en la API
      // en caso de que el usuario no exista, se crea (llamando a la funcion createUser)
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

      // Función para obtener los contactos de un usuario
      getContacts: async (userId) => {
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

      // función para editar un contacto
      editContact: async (userId, contactId, contactData) => {
        console.log(
          "Editing contact",
          contactId,
          "for user",
          userId,
          "with data:",
          contactData
        );
        console.log("UserId", userId.slug);

        const response = await fetch(
          `https://playground.4geeks.com/contact/agendas/${userId.slug}/contacts/${contactId}`,
          {
            method: "PUT",
            body: JSON.stringify(contactData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log("Server answer", data);

        if (response.ok) {
          alert("Contact successfully edited.");
        }

        return data;
      },

      // función para eliminar un contacto
      // ojo esta función aun no funciona... PENDIENTE
      deleteContact: async (contactId) => {
        console.log("Deleting contact", contactId, "for user");

        const response = await fetch(
          `https://playground.4geeks.com/contact/agendas/rikrdoLeal/contacts/${contactId}`,
          {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          alert("Contact successfully deleted.");
        }

        return location.reload();
      },
    },
  };
};

export default getState;
