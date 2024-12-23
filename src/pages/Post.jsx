import './css/post_styles.css';
import { db } from '../firebase';
import { useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';

function Post() {
    const sportRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const goalsRef = useRef(null);
    const feedbackRef = useRef(null);

    const postThread = async () => {
    // Check if any required fields are empty or null
    if (
        !sportRef.current.value.trim() ||
        !nameRef.current.value.trim() ||
        !descriptionRef.current.value.trim() ||
        !goalsRef.current.value.trim() ||
        !feedbackRef.current.value.trim()
    ) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    try {
        const messageDocRef = collection(db, "threads");
        await addDoc(messageDocRef, {
            author: "placeholder", // Replace this with actual author logic (e.g., user context).
            targetSport: sportRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            goals: goalsRef.current.value,
            challenges: feedbackRef.current.value,
        });
        alert("Training program successfully posted!");
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to post the training program. Please try again.");
    }
};


    return (
        <>
            <body>
                <div className='mainPostContainer'>
                    <div className="container1">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h1>Training Program Description</h1>

                            <label htmlFor="sport">Target Sport</label>
                            <div className="w-full max-w-sm min-w-[200px]">
                                <div className="relative">
                                    <select
                                        ref={sportRef}
                                        id="sport"
                                        name="sport"
                                        className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="swimming">Swimming</option>
                                        <option value="wrestling">Wrestling</option>
                                        <option value="boxing">Boxing</option>
                                        <option value="bjj">Brazilian Jiu-Jitsu</option>
                                        <option value="running">Running</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.2"
                                        stroke="currentColor"
                                        className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                        />
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
                                className="input-field"
                                required
                            />

                            <label htmlFor="description">Training Program Description</label>
                            <textarea
                                ref={descriptionRef}
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Provide details about your training program"
                                className="input-field"
                                required
                            ></textarea>

                            <label htmlFor="goals">Goals/Intentions</label>
                            <input
                                ref={goalsRef}
                                type="text"
                                id="goals"
                                name="goals"
                                placeholder="What were your goals for this session?"
                                className="input-field"
                            />

                            <label htmlFor="feedback">Challenges/Feedback</label>
                            <textarea
                                ref={feedbackRef}
                                id="feedback"
                                name="feedback"
                                rows="3"
                                placeholder="Document challenges or self-feedback"
                                className="input-field"
                            ></textarea>

                            <button
                                type="button"
                                onClick={postThread}
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Post Training
                            </button>
                        </form>
                    </div>

                    <div className='container2'>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Add Session
                        </button>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Post;
