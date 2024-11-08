import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function AddSkillPage({ dataLink }) {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState([{ type: "", name: "", url: "" }]);

    const [selectedCategory, setSelectedCategory] = useState("Visual Arts")


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleResourceChange = (index, field, value) => {
        const newResources = [...resources];
        newResources[index][field] = value;
        setResources(newResources);
    };

    const addResource = () => {
        setResources([...resources, { type: "", name: "", url: "" }]);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newSkill = { name, description, targetAudience, imageURL, resources };

        let apiEndpoint;
        switch (selectedCategory) {
            case "Visual Arts":
                apiEndpoint = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills";
                break;
            case "Sports":
                apiEndpoint = "https://skills-sports-default-rtdb.europe-west1.firebasedatabase.app/skills";
                break;
            case "Music":
                apiEndpoint = "https://skills-music-default-rtdb.europe-west1.firebasedatabase.app/skills";
                break;
            default:
                console.error("Unknown category");
                return;
        }

        axios.post(`${apiEndpoint}.json`, newSkill)
            .then(response => {
                console.log(response);
                // Redirect based on category 
                navigate(`/${selectedCategory.replace(" ", "-").toLowerCase()}-page`);
            })
            .catch(e => console.log("Error creating a new skill...", e));
    };

    return (
        <div className="Main skill-details-container">

            <div className="add-skill-details-card">

                <div className="add-skill-info-container">
                    <div className="add-skill-title-container">
                        <h3 className="skill-title">Add Skill</h3>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group mb-3">
                            <label for="categories">Choose a Category:  </label>
                            <select id="categories" name="categories" onChange={handleCategoryChange}>
                                <option value="Visual Arts">Visual Arts</option>
                                <option value="Sports">Sports</option>
                                <option value="Music">Music</option>
                            </select>
                        </div>

                        <div className="form-container">
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

                            <div className="form-group">
                                <label>Resources:</label>
                                {resources.map((resource, index) => (
                                    <div key={index} className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={resource.name}
                                            onChange={(e) => handleResourceChange(index, 'name', e.target.value)}
                                            className="form-control mb-1"
                                            required
                                        />
                                        <input
                                            type="url"
                                            placeholder="URL"
                                            value={resource.url}
                                            onChange={(e) => handleResourceChange(index, 'url', e.target.value)}
                                            className="form-control mb-1"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Type (School / Platform / Tutorial / etc.)"
                                            value={resource.type}
                                            onChange={(e) => handleResourceChange(index, 'type', e.target.value)}
                                            className="form-control mb-1"
                                        />
                                    </div>

                                ))}
                            </div>
                            <div className="add-btn-container">
                                <button type="button" onClick={addResource} className="add-btn btn btn-outline-secondary mt-2">
                                    Add Resource
                                </button>
                            </div>
                        </div>

                        <div className="save-btn-container">
                            <button type="submit" className="btn btn-dark btn-lg m-2">Save Skill</button>
                        </div>

                    </form>
                </div>
            </div>
            <div><Link to="/" className="back-btn btn btn btn-secondary btn-sm">Back</Link></div>
        </div>
    );
}

export default AddSkillPage;