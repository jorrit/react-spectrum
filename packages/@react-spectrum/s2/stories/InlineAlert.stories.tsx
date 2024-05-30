import {InlineAlert, Button, Heading, Content} from '../src';
import type {Meta} from '@storybook/react';
import {useState} from 'react';

const meta: Meta<typeof InlineAlert> = {
  component: InlineAlert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <InlineAlert {...args}>
    <Heading>Payment Information</Heading>
    <Content>
      There was an error processing your payment. Please check that your card information is correct, then try again.
    </Content>
  </InlineAlert>
);

export const DynamicExample = (args: any) => {
  let [shown, setShown] = useState(false);

  return (
    <>
      <Button variant="primary" onPress={() => setShown(!shown)}>{shown ? 'Hide Alert' : 'Show Alert'}</Button>
      {shown &&
        <InlineAlert {...args} autoFocus>
          <Heading>Payment Information</Heading>
          <Content>
            There was an error processing your payment. Please check that your card information is correct, then try again.
          </Content>
        </InlineAlert>
      }
    </>
  );
};
