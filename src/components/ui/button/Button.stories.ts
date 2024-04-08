import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"

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

export const Primary: Story = {
  name: "Primary Button",
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
}

export const Secondary: Story = {
  name: "Secondary Button",
  args: {
    variant: "secondary",
    size: "default",
    children: "Button"
  },
}

export const Destructive: Story = {
  name: "Destructive Button",
  args: {
    variant: "destructive",
    size: "default",
    children: "Button"
  },
}

export const Ghost: Story = {
  name: "Ghost Button",
  args: {
    variant: "ghost",
    size: "default",
    children: "Button"
  },
}

export const Outline: Story = {
  name: "Outline Button",
  args: {
    variant: "outline",
    size: "default",
    children: "Button"
  },
}

export const Link: Story = {
  name: "Link Button",
  args: {
    variant: "link",
    size: "default",
    children: "Button"
  },
}