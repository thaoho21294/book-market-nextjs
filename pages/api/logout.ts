import auth0 from 'lib/auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth0.handleLogout(req, res, { returnTo: '/' })
  } catch (error) {
    console.error(error)
    throw error

    // res.status(error.status || 500).end(error.message)
  }
}
