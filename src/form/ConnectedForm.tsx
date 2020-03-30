import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import Form from './Form';

interface ConnectedFormProps {
  children(formProps: any): any;
  onSubmit(values: any): any;
}

const ConnectedForm: React.FC<ConnectedFormProps> = ({
  children,
  onSubmit,
  ...ownProps
}) => (
  <FinalForm onSubmit={onSubmit} {...ownProps}>
    {({ handleSubmit, ...formProps }) => (
      <Form onSubmit={handleSubmit}>{children(formProps)}</Form>
    )}
  </FinalForm>
);

export default ConnectedForm;
