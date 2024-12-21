import './css/post_styles.css'
function Post() {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Post Workout</title>
            </head>
            <body>
                <div className='mainPostContainer'>
                    <div className="container1">
                        <form action="/submit-workout" method="post">
                            <h1>Post Your Workout</h1>
                            <h2>General Information</h2>
                            <label htmlFor="sport">Sport/Activity Type</label>
                            <select id="sport" name="sport" required>
                                <option value="">Select a sport</option>
                                <option value="running">Running</option>
                                <option value="swimming">Swimming</option>
                                <option value="football">Football</option>
                                <option value="weightlifting">Weightlifting</option>
                                <option value="other">Other</option>
                            </select>

                            <label htmlFor="title">Workout Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter a title"
                                required
                            />

                            <div className="flex">
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input type="date" id="date" name="date" required />
                                </div>
                                <div>
                                    <label htmlFor="time">Time</label>
                                    <input type="time" id="time" name="time" />
                                </div>
                            </div>

                            <label htmlFor="duration">Duration (in minutes)</label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                placeholder="Enter duration"
                                min="1"
                                required
                            />

                            <h2>Performance Metrics</h2>
                            <label htmlFor="distance">
                                Distance (in km) <span className="optional">(Optional for cardio activities)</span>
                            </label>
                            <input
                                type="number"
                                id="distance"
                                name="distance"
                                placeholder="Enter distance"
                            />

                            <label htmlFor="sets">
                                Sets & Reps <span className="optional">(Optional for strength training)</span>
                            </label>
                            <input
                                type="text"
                                id="sets"
                                name="sets"
                                placeholder="E.g., 4 sets of 10 reps"
                            />

                            <h2>Description & Notes</h2>
                            <label htmlFor="description">Workout Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Provide details about your workout"
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
                        <h1>This is container 2</h1>
                    </div>
                </div >

            </body>


        </>
    );
}
export default Post