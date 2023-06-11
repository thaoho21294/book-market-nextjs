import { screen, waitForElementToBeRemoved } from '@testing-library/react'

export const waitForLoadingToBeDone = async () => {
  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/))
}
