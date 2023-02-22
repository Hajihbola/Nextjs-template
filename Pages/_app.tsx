import "../src/styles/globals.css";

import { AppType } from "next/app";
import { useRouter } from "next/router";

import React from 'react'

function MyApp() {
  return (
    <div>_app</div>
  )

// function MyApp({ Component, pageProps }: AppProps) {
// 	const { pathname } = useRouter();
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			{["/404", "/newsletter", "/unsubscribe"].includes(pathname) ? (
// 				<Component {...pageProps} />
// 			) : (
// 				<ModalsProvider>
// 					<Header />
// 					<Component {...pageProps} />
// 					<Footer />
// 				</ModalsProvider>
// 			)}
// 		</QueryClientProvider>
// 	);
// }

}
export default MyApp;

