import Header from '../Header/Header'
import React from "react";
import Head from "next/head";

export type LayoutProps = {
    title: string
}

const Layout: React.FC<LayoutProps> = ({title, children})  => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;