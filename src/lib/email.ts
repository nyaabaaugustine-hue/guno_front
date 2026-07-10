import { AgentMailClient } from 'agentmail'

/**
 * Initialize the AgentMail client.
 * Requires the AGENTMAIL_API_KEY environment variable to be set.
 */
function getClient(): AgentMailClient {
  const apiKey = process.env.AGENTMAIL_API_KEY
  if (!apiKey) {
    throw new Error(
      'AGENTMAIL_API_KEY is not set. Add it in the Keys tab or .env.local'
    )
  }
  return new AgentMailClient({ apiKey })
}

export interface SendEmailParams {
  to: string | string[]
  subject: string
  text?: string
  html?: string
  replyTo?: string
}

/**
 * Creates a new inbox for receiving replies.
 */
export async function createInbox(displayName: string) {
  const client = getClient()
  return client.inboxes.create({ displayName })
}

/**
 * Sends an email via AgentMail.
 * If no inboxId is provided, creates a temporary inbox automatically.
 */
export async function sendEmail(params: SendEmailParams & { inboxId?: string }) {
  const client = getClient()
  const to = Array.isArray(params.to) ? params.to : [params.to]

  if (!params.inboxId) {
    const inbox = await client.inboxes.create({
      displayName: 'Juno Tax',
    })
    return client.inboxes.messages.send(inbox.inboxId, {
      to,
      subject: params.subject,
      text: params.text,
      html: params.html,
      replyTo: params.replyTo,
    })
  }

  return client.inboxes.messages.send(params.inboxId, {
    to,
    subject: params.subject,
    text: params.text,
    html: params.html,
    replyTo: params.replyTo,
  })
}

/**
 * Lists all messages in a given inbox.
 */
export async function listMessages(inboxId: string) {
  const client = getClient()
  return client.inboxes.messages.list(inboxId)
}
