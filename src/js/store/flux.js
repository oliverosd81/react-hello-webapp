const getState = ({ getStore, getActions, setStore }) => {
  return {
    actions: {

      // Funcion para guardar contacto
      saveContact: async (contactData) => {
        try {
          console.log("Saving contact", contactData);

          const response = await fetch("https://playground.4geeks.com/contact/agendas/rikrdoLeal/contacts", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(contactData),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log("Server answer", data);
          return data;
        } catch (error) {
          console.error("Error saving contact:", error);
          throw new Error("Error saving contact");
        }
      }
    }
  };
};

export default getState;