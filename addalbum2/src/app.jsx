import React from 'react';

function App() {
  return (
    <html>
      <head>
        <title> Add New Album</title>
      </head>
      <body>
        <div className="header">
          <h1>Add New Album</h1>
          <hr />

          <p className="mix"></p>

          <p>Album Art</p>
          <h2></h2>
          <img
            src="https://2.bp.blogspot.com/-Nc9YO_-F8yI/TcSIAB-nR-I/AAAAAAAAAGI/hPkuxqkqVcU/s1600/music-clipartMUSIC1.jpg"
            alt="Trulli"
            width="250"
            height="250"
          />

          <p></p>
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
            <input type="submit" />
          </form>
        </div>
        <hr />

        <p>Album Details</p>
        <style>
          {`
            .flex-container {
              display: flex;
              background-color:white;
            }
            
            .flex-container > div {
              background-color: white;
              margin: 50px;
              padding: 20px;
              font-size: 30px;
            }
          `}
        </style>
        <div className="flex-container">
          <form>
            <label htmlFor="fname">Artist</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
          </form>
          <label htmlFor="lname">Genre</label>
          <br />
          <input type="text" id="lname" name="lname" />
        </div>
        <div className="flex-container">
          <form>
            <label htmlFor="fname">Producer</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
          </form>
          <label htmlFor="lname">Release</label>
          <br />
          <input type="text" id="lname" name="lname" />
        </div>

        <button type="button">CANCEL</button>
        <button type="button">ADD</button>
      </body>
    </html>
  );
}

export default App;