const React = require("react");

function EngineerNew() {
    return (
        <html>
            <head>
                <title>Add New Engineer</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <header>
                    <h1>Engineer Directory</h1>
                </header>
                <div className="container">
                    <h2>Add a New Engineer</h2>
                    <form action="/api/engineers" method="POST">
                        <p>
                            <label>
                                Name:
                                <input type="text" name="name" required />
                            </label>
                        </p>
                        <p>
                            <label>
                                Specialty:
                                <input type="text" name="specialty" required />
                            </label>
                        </p>
                        <p>
                            <label>
                                Years of Experience:
                                <input type="number" name="yearsExperience" min="0" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Available:
                                <input type="checkbox" name="available" />
                            </label>
                        </p>
                        <p>
                            <button type="submit" className="btn">Create Engineer</button>
                        </p>
                    </form>
                    <p>
                        <a href="/engineers" className="btn">Back to Engineers</a>
                    </p>
                </div>
                <footer>
                    &copy; 2025 Engineer Registry
                </footer>
            </body>
        </html>
    );
}

module.exports = EngineerNew;
