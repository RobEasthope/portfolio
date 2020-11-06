import { NextApiRequest, NextApiResponse } from 'next'

export const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default handler