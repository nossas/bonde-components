import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ConnectedForm, Form, InputField } from '@';
import { Form as FinalForm } from 'react-final-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = async (values) => {
  await sleep(1000)
  action('submit')(values)
}

const required = value => (value ? undefined : 'Required')

export const form = () =>
  <FinalForm onSubmit={submit}>
    {({ handleSubmit, submitting }) => (
      <Form onSubmit={handleSubmit}>
        <InputField
          label='E-mail'
          name='email'
          type='email'
          validate={required}
        />
        <InputField
          label='Password'
          name='password'
          type='password'
          validate={required}
        />
        <Container>
          <Button dark onClick={action('forget password')}>Reset my password</Button>
          <Button type='submit' disabled={submitting}>Submit</Button>
        </Container>
      </Form>
    )}
  </FinalForm>
;

export const connectedForm = () =>
  <ConnectedForm onSubmit={submit}>
    {({ submitting }) => (
        <>
          <InputField
            label='E-mail'
            name='email'
            type='email'
            validate={required}
          />
          <InputField
            label='Password'
            name='password'
            type='password'
            validate={required}
          />
          <Container>
            <Button dark onClick={action('forget password')}>Reset my password</Button>
            <Button type='submit' disabled={submitting}>Submit</Button>
          </Container>
        </>
    )}
  </ConnectedForm>
;

export default {
  title: 'Form',
};