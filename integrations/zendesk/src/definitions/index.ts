import { z, IntegrationDefinitionProps } from '@botpress/sdk'

export { actions } from './actions'
export { events } from './events'
export { channels } from './channels'

export const configuration = {
  schema: z.object({
    organizationSubdomain: z
      .string({
        description: 'Your zendesk organization subdomain. e.g. botpress7281',
      })
      .min(1),
    email: z
      .string({
        description: 'Your zendesk account email. e.g. john.doe@botpress.com',
      })
      .email(),
    apiToken: z
      .string({
        description: 'Zendesk API Token',
      })
      .min(1),
  }),
} satisfies IntegrationDefinitionProps['configuration']

export const states = {
  subscriptionInfo: {
    type: 'integration',
    schema: z.object({
      subscriptionId: z.string(),
      triggerIds: z.array(z.string()),
    }),
  },
} satisfies IntegrationDefinitionProps['states']

export const user = {
  tags: {
    id: {},
    name: {},
    email: {},
    role: {},
  },
  creation: { enabled: true, requiredTags: [] },
} satisfies IntegrationDefinitionProps['user']
