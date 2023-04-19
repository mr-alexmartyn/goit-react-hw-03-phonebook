import {
  ContactListItem,
  ContactListItemNumber,
  ContactListItemName,
  ContactListItemButton,
} from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = p => {
  const { name, number, id } = p.contactItem;
  return (
    <ContactListItem>
      <ContactListItemName>{name}</ContactListItemName>
      <ContactListItemNumber>{number}</ContactListItemNumber>
      <ContactListItemButton onClick={() => p.onDeleteContact(id)}>
        Delete
      </ContactListItemButton>
    </ContactListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func,
};
