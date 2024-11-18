
import TopHeader from "./TopHeader";
import Head from "next/head";



export default function Layout({children}) {





        return (<div className="flex flex-col">
                <Head>
                        <script src="/AnimeJS/anime.min.js"></script>
                </Head>
                        <TopHeader />
                        {children}











                </div>);}