import {ActionButton, Button, Provider, Tooltip, TooltipTrigger} from '../src';
import {CombinedTooltip} from '../src/Tooltip';
import Crop from '../s2wf-icons/assets/svg/S2_Icon_Crop_20_N.svg';
import LassoSelect from '../s2wf-icons/assets/svg/S2_Icon_LassoSelect_20_N.svg';
import type {Meta} from '@storybook/react';
import {style} from '../style/spectrum-theme' with {type: 'macro'};

const meta: Meta<typeof CombinedTooltip> = {
  component: CombinedTooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => {
  let {
    trigger,
    isOpen,
    onOpenChange,
    defaultOpen,
    isDisabled,
    delay,
    containerPadding,
    crossOffset,
    offset,
    placement,
    shouldFlip,
    ...tooltipProps
  } = args;
  let triggerProps = {
    trigger,
    isOpen,
    onOpenChange,
    defaultOpen,
    isDisabled,
    delay,
    containerPadding,
    crossOffset,
    offset,
    placement,
    shouldFlip
  };

  return (
    <div
      className={style({
        display: 'flex',
        flexDirection: 'row',
        columnGap: 12
      })}>
      <TooltipTrigger {...triggerProps}>
        <Button aria-label="Crop"><Crop /></Button>
        <Tooltip {...tooltipProps}>Crop</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger {...triggerProps}>
        <ActionButton aria-label="Lasso"><LassoSelect /></ActionButton>
        <Tooltip {...tooltipProps}>Lasso</Tooltip>
      </TooltipTrigger>
    </div>
  );
};

export const LongLabel = (args: any) => {
  let {
    trigger,
    isOpen,
    onOpenChange,
    defaultOpen,
    isDisabled,
    delay,
    containerPadding,
    crossOffset,
    offset,
    placement,
    shouldFlip,
    ...tooltipProps
  } = args;
  let triggerProps = {
    trigger,
    isOpen,
    onOpenChange,
    defaultOpen,
    isDisabled,
    delay,
    containerPadding,
    crossOffset,
    offset,
    placement,
    shouldFlip
  };
  return (
    <TooltipTrigger {...triggerProps}>
      <ActionButton aria-label="Lasso"><LassoSelect /></ActionButton>
      <Tooltip {...tooltipProps}>Checkbox with very long label so we can see wrapping</Tooltip>
    </TooltipTrigger>
  );
};

export const ColorScheme = (args: any) => (
  <Provider colorScheme="dark" background="base" styles={style({padding: 48})}>
    <Example {...args} />
  </Provider>
);
