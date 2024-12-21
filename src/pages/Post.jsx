import './css/post_styles.css'
function Post() {
    return (
        <>
            <body>
                <div className='mainPostContainer'>
                    <div className="container1">
                        <form action="/submit-workout" method="post">
                            <h1>Training Program Description</h1>
                            <label htmlFor="sport">Target Sport</label>
                            <select id="sport" name="sport" required>
                                <option value="">Select a sport</option>
                                <option value="running">Running</option>
                                <option value="swimming">Swimming</option>
                                <option value="football">Football</option>
                                <option value="weightlifting">Weightlifting</option>
                                <option value="other">Other</option>
                            </select>

                            <label htmlFor="title">Training Program Name</label>
                            <input
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

                            <button type="submit">Post Workout</button>
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