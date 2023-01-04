import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import RootLayout from '../components/RootLayout'
import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>)
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
  )
}
