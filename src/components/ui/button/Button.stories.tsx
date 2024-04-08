import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "variant",
      defaultValue: "default",
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      name: "size",
      defaultValue: "default",
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      table: {
        defaultValue: { summary: "default" },
      },
    }
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
}

export const SecondaryButton: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Button"
  },
}

export const DestructiveButton: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Button"
  },
}

export const GhostButton: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Button"
  },
}

export const OutlineButton: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Button"
  },
}

export const LinkButton: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Button"
  },
}

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: (
      <><EnvelopeOpenIcon className="w-4 h-4" /></>
    )
  },
}

export const IconButton: Story = {
  args: {
    variant: "default",
    size: "default",
    children: (
      <><EnvelopeOpenIcon className="w-4 h-4 mr-2" />Login with Email</>
    )
  },
}