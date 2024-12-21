import './css/post_styles.css'
import { db, collection, addDoc } from '../firebase';
import { useRef } from 'react';

function Post() {

    const nameRef = useRef(null);

    const postThread = async () => {
        const messageDocRef = collection(db, "threads");
        await addDoc(messageDocRef, {
            author: "placeholder",
            targetSport: nameRef.current.value,
            name: nameRef.current.value,
            description: Math.floor(Date.now() / 1000),
            goals: "Goals",
            challenges: "Something"
        });
    }

    return (
        <>
            <body>
                <div className='mainPostContainer'>
                    <div className="container1">
                        <form action="/submit-workout" method="post">
                            <h1>Training Program Description</h1>
                            <label htmlFor="sport">Target Sport</label>
                            <div class="w-full max-w-sm min-w-[200px]">
                                <div class="relative">
                                    <select
                                        className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                        <option value="swimming">Swimming</option>
                                        <option value="wresting">Wrestling</option>
                                        <option value="boxing">Boxing</option>
                                        <option value="bjj">Brazillian jujitsu</option>
                                        <option value="running">Running</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                            </div>

                            <label htmlFor="title">Training Program Name</label>
                            <input
                                ref={nameRef}
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter a title"
                                required
                            />

                            <label htmlFor="description">Training Program Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Provide details about your training program"
                                required
                            ></textarea>

                            <label htmlFor="goals">Goals/Intentions</label>
                            <input
                                type="text"
                                id="goals"
                                name="goals"
                                placeholder="What were your goals for this session?"
                            />

                            <label htmlFor="feedback">Challenges/Feedback</label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows="3"
                                placeholder="Document challenges or self-feedback"
                            ></textarea>

                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Post Training</button>
                        </form>
                    </div>
                    <div className='container2'>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Session</button>
                    </div>
                </div >

            </body>


        </>
    );
}
export default Post