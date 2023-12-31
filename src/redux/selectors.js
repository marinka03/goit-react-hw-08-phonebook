import { createSelector } from '@reduxjs/toolkit';

export const selectorFilter = state => state.filter;
export const selectorContacts = state => state.contacts;
export const selectorItems = state => state.contacts.items;

export const selectorContactsFilter = createSelector(
  [selectorItems, selectorFilter],
  (items, filterItems) => {
    return items.length > 0
      ? items.filter((contact = {}) =>
          contact.name?.toLowerCase().includes(filterItems.toLowerCase())
        )
      : [];
  }
);
