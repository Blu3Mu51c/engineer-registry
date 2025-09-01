const React = require("react");

function EngineerEdit({ engineer }) {
    return (
        <html>
            <head>
                <title>Edit Engineer</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <header>
                    <h1>Engineer Directory</h1>
                </header>

                <div className="container">
                    <h2>Edit Engineer: {engineer.name}</h2>

                    <form
                        action={`/api/engineers/${engineer._id}?_method=PUT`}
                        method="POST"
                    >
                        <p>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={engineer.name}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Specialty:
                                <input
                                    type="text"
                                    name="specialty"
                                    defaultValue={engineer.specialty}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Years of Experience:
                                <input
                                    type="number"
                                    name="yearsExperience"
                                    min="0"
                                    defaultValue={engineer.yearsExperience}
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Available:
                                <input
                                    type="checkbox"
                                    name="available"
                                    defaultChecked={engineer.available}
                                />
                            </label>
                        </p>

                        <p>
                            <button type="submit" className="btn">Update Engineer</button>
                            <a
                                href={`/engineers/${engineer._id}`}
                                className="btn"
                                style={{ marginLeft: "0.5rem" }}
                            >
                                Cancel
                            </a>
                        </p>
                    </form>
                </div>

                <footer>
                    &copy; 2025 Engineer Registry
                </footer>
            </body>
        </html>
    );
}

module.exports = EngineerEdit;
