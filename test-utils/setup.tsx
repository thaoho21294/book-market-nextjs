import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'

export const renderWithQueryClient = (node: ReactNode) => {
  const queryClient = new QueryClient()

  render(<QueryClientProvider client={queryClient}>{node}</QueryClientProvider>)
}
