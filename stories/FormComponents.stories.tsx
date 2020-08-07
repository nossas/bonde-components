import React from 'react';
import { action } from '@storybook/addon-actions';
import { RoundSelect, RoundSelectField, Form, Button } from '@';
import { Form as FinalForm } from 'react-final-form';

const Layout = ({ children, bg = '#fff' }) => (
  <div style={{ width: '200px', padding: '20px 10px', backgroundColor: bg }}>
    {children}
  </div>
);

export const select = () => {
  const dicio = [
    {
      value: 'desabilitada',
      label: 'Desabilitada',
    },
    {
      value: 'aprovada',
      label: 'Aprovada',
    },
  ];
  return (
    <Layout>
      <RoundSelect
        options={dicio}
        name="availability"
        placeholder="Disponibilidade"
      />
    </Layout>
  );
};

select.story = {
  name: 'Select',
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = async values => {
  await sleep(1000);
  action('submit')(values);

  return {};
};

export const selectField = () => {
  const dicio = [
    {
      value: 'desabilitada',
      label: 'Desabilitada',
    },
    {
      value: 'aprovada',
      label: 'Aprovada',
    },
  ];
  return (
    <FinalForm onSubmit={submit}>
      {({ handleSubmit, submitting }) => (
        <Form onSubmit={handleSubmit}>
          <RoundSelectField
            options={dicio}
            name="availability"
            placeholder="Disponibilidade"
            label="Disponibilidade"
          />
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </Form>
      )}
    </FinalForm>
  );
};

selectField.story = {
  name: 'Select Field',
};

export default {
  title: 'FormComponents',
};
