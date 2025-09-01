const React = require("react");

function EngineerShow({ engineer }) {
    return (
        <html>
            <head>
                <title>{engineer.name}</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <header>
                    <h1>Engineer Directory</h1>
                </header>

                <div className="container">
                    <div className="card">
                        <h2>{engineer.name}</h2>
                        <p><strong>Specialty:</strong> {engineer.specialty}</p>
                        <p><strong>Years of Experience:</strong> {engineer.yearsExperience}</p>
                        <p>
                            <strong>Status:</strong> {engineer.available ? "Available for work" : "Not available"}
                        </p>

                        <div style={{ marginTop: "1rem" }}>
                            <a href={`/engineers/${engineer._id}/edit`} className="btn">Edit</a>

                            <form
                                action={`/api/engineers/${engineer._id}?_method=DELETE`}
                                method="POST"
                                style={{ display: "inline", marginLeft: "0.5rem" }}
                            >
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </div>

                        <p style={{ marginTop: "1rem" }}>
                            <a href="/engineers" className="btn">Back to Engineers</a>
                        </p>
                    </div>
                </div>

                <footer>
                    &copy; 2025 Engineer Registry
                </footer>
            </body>
        </html>
    );
}

module.exports = EngineerShow;
