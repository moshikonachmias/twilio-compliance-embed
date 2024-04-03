import type { Meta, StoryObj } from "@storybook/react";

import { TwilioComplianceEmbed } from "../../../components/TwilioComplianceEmbed/TwilioComplianceEmbed";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/TwilioComplianceEmbed",
  component: TwilioComplianceEmbed,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    sessionToken: { type: "string" },
    inquiryId: { type: "string" },
  },
} satisfies Meta<typeof TwilioComplianceEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    inquiryId: "inq_11KnWd9o72N9xkzByehEm9ts",
    sessionToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpcXNlX0N3VzlYTUVlYkpBRWJlcldpQ24xSlc5cCIsImF1ZCI6InBlcnNvbmEtdmVyaWZ5IiwiaXNzIjoid2l0aHBlcnNvbmEuY29tIiwiaWF0IjoxNjk0NzQ5NDYzLCJuYmYiOjE2OTQ3NDk0NjMsImV4cCI6MTY5NDgzNTg2MiwianRpIjoiZmRjMzA2MzUtNzgxMi00ODQ5LTlhZmMtYzc0M2NhZWRjMGM5IiwiaW5xdWlyeV9pZCI6ImlucV8xMUtuV2Q5bzcyTjl4a3pCeWVoRW05dHMiLCJlbnZpcm9ubWVudF9pZCI6ImVudl9mbVRhNlhzeUh3anI4OEs4TEF4ZFUzbVIifQ.QH8_TBjKJe89jM_QLn3l_vLF1ZSPp7jIoRr5yaWYfyU",
  },
};
