import { Link } from "react-router-dom"
import trainingImg from "../assets/Training.png"
import './css/styles.css'
import { useState, useEffect } from "react";
import Thread from "../classes/thread";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
    const [retrievedThreads, setRetrievedThreads] = useState([]);
    useEffect(() => {
        let unsubThread;

        unsubThread = onSnapshot(collection(db, "threads"), (snapshot) => {
            const threadsList = snapshot.docs.map((doc) => {
                const data = doc.data();
                return new Thread(doc.data(), doc.id);
            });
            setRetrievedThreads(threadsList);
        }
        );

        return () => {
            if (unsubThread) unsubThread();
        }
    }, []);

    useEffect(() => {
        console.log("Retrieved Threads:", retrievedThreads);
    }, [retrievedThreads]);

    return (
        <>
            <div className="filter-bar">
                <div className="filter-bar-left">
                    <button>Left Button</button>
                </div>
                <div className="filter-bar-right">
                    <Link to='/post'>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Post</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                {retrievedThreads.map((thread) => (
                    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div class="p-4">
                      <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                        {thread.name}
                      </h5>
                      <p class="text-slate-600 leading-normal font-light">
                        {thread.description}
                      </p>
                   
                      <button class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}


            </div>
        </>


    )
}

export default Home