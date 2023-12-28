import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorContacts,
  selectorContactsFilter,
} from '../../redux/selectors';
import { currentUser, getAllContacts } from '../../redux/operations';
import style from '../ContactList/ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import {
  selectAuthObj,
  selectIsLoggedIn,
} from '../../redux/auth/auth-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectorContacts);

  const contactsFtr = useSelector(selectorContactsFilter);
  const userObj = useSelector(selectAuthObj);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(currentUser(userObj));
    if (isLoggedIn) {
      dispatch(getAllContacts(userObj));
    }
  }, [dispatch, isLoggedIn, userObj]);

  return (
    <div>
      <ul>
        {isLoading && <p>Loading numbers...</p>}
        {error && <p>{error}</p>}

        {contactsFtr?.length === 0 && !isLoading && (
          <p>There are no contacts found!</p>
        )}
        {contactsFtr?.length > 0 &&
          contactsFtr.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
              <ContactItem name={name} number={number} id={id} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
