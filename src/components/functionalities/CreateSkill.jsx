import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function CreateSkill({ dataLink }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSkill = {
            name,
            description,
            targetAudience,
            imageURL,
            resources: resources.split(",").map(resource => resource.trim()),
        };

        axios.post(`${dataLink}.json`, newSkill)
            .then(response => {
                console.log(response);
            })
            .catch(e => console.log("Error creating a new skill...", e));
    };

    return (
        <div className="skill-details-container">

            <div className="add-skill-details-card">

                <div className="add-skill-info-container">
                    <h3 className="skill-title">Add Skill</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Name:</label>
                            <input 
                                type="text"
                                name="name"
                                placeholder="Enter the name of the skill" 
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                placeholder="Enter the description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Target Audience:</label>
                            <textarea
                                name="targetAudience"
                                placeholder="Enter the target audience"
                                value={targetAudience}
                                onChange={(e) => setTargetAudience(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Image URL:</label>
                            <textarea
                                name="imageURL"
                                placeholder="Enter the URL to an image related to the new skill"
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Resources (comma separated):</label>
                            <textarea
                                name="resources"
                                placeholder="Enter some possible resources to improve this skill"
                                value={resources}
                                onChange={(e) => setResources(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary me-2">Create</button>
                        <Link to="/" className="btn btn-secondary">Back</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateSkill;