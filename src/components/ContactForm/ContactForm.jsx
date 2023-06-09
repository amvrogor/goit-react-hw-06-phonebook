import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { validateSchema } from 'components/validateSchema';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validateSchema}
      onSubmit={(values, actions) => {
        contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
          ? alert(`${values.name} is already in contacts`)
          : dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
