const React = require("react");

function EngineersIndex({ engineers }) {
    return (
        <html>
            <head>
                <title>Engineers</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <header>
                    <h1>Engineer Directory</h1>
                </header>
                <div className="container">
                    <div style={{ marginBottom: "1.5rem" }}>
                        <a href="/" className="btn">Home</a>
                        <a href="/engineers/new" className="btn" style={{ marginLeft: "1rem" }}>Add New Engineer</a>
                    </div>

                    {engineers.length === 0 ? (
                        <p>No engineers found.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Specialty</th>
                                    <th>Years Experience</th>
                                    <th>Available</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {engineers.map((engineer) => (
                                    <tr key={engineer._id}>
                                        <td>{engineer.name}</td>
                                        <td>{engineer.specialty}</td>
                                        <td>{engineer.yearsExperience}</td>
                                        <td>{engineer.available ? "Yes" : "No"}</td>
                                        <td>
                                            <a href={`/engineers/${engineer._id}`} className="btn">View</a>
                                            <a href={`/engineers/${engineer._id}/edit`} className="btn" style={{ marginLeft: "0.5rem" }}>Edit</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <footer>
                    &copy; 2025 Engineer Registry
                </footer>
            </body>
        </html>
    );
}

module.exports = EngineersIndex;
