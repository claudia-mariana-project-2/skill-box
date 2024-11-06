import { Link, NavLink } from "react-router-dom"

function HomePage() {
    return (
        <div className="full-screen-container d-flex flex-column align-items-center 100vh position-fixed">

            <div className=" d-flex flex-column align-items-center">
                <h1 className="m-5 project-title">
                    SkillBox
                </h1>

                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="text-center">Unlock your potential</h2>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="text-center">Discover and master new skills with SkillBox</h2>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="text-center">The app that connects you to top schools, courses, and resources for learning and growth</h3>
                </div>

            </div>


            <div className="card-container">
                <NavLink to="/visual-arts-page">
                    <div
                        className=" card card-1">
                        <h2>Visual Arts</h2>
                    </div>
                </NavLink>

                <div
                    className="card card-2">
                    <h2>Sports</h2>
                </div>

                <div
                    className="card card-3">
                    <h2>Music</h2>
                </div>

                
            </div>
        </div >
    )
}
export default HomePage