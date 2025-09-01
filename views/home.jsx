const React = require("react");

function Home(props) {
  return (
    <html>
      <head>
        <title>{props.title || "Engineer Directory"}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <h1>Engineer Directory</h1>
        </header>

        <div className="container">
          <h2>Welcome to the Engineer Directory</h2>
          <p>
            <a href="/engineers" className="btn">View Engineers</a>
          </p>
          <p>
            <a href="/engineers/new" className="btn">Add a New Engineer</a>
          </p>
        </div>

        <footer>
          &copy; 2025 Engineer Registry
        </footer>
      </body>
    </html>
  );
}

module.exports = Home;
