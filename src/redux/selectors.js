export const selectFilteredContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.query.toLowerCase())
  );
};

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.query;
