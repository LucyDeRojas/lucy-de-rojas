
import TopHeader from "./TopHeader";
import Head from "next/head";
import Script from "next/script";



export default function Layout({children}) {





        return (<div className="flex flex-col">
                <Head>
                        {/* <script src="/AnimeJS/anime.min.js"></script> */}
                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />


                </Head>

                {/* <Script src="https://third-party-script.js"></Script> */}
                        <TopHeader />
                        {children}











                </div>);}