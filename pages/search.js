import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import {API_KEY , CONTEXT_KEY } from "../keys"
import Response from "../Response"
import SearchResults from "./SearchResults"
function Search({ results }) {
    const router = useRouter();

    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Search Results</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <SearchResults results={results}/>
            
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    //change to true iff you exhaust the google quote for api 
    const startIndex = context.query.start  || "0";

    const data = useDummyData ?
     Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then((response) => response.json());

    return {
        props: { 
            results: data
         },
    };
}