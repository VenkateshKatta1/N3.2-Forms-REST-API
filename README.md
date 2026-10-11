# CS651 Lab N3.2: Forms and REST API

This project demonstrates two ways to submit customer information from a web page:

- A traditional HTML form submitted with `POST`.
- A REST API request sent as JSON using `fetch()`.

## Run the Application

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Open [http://localhost:8080](http://localhost:8080) in a browser.

## Application Sections

### Part A: Traditional HTML Form

The first form submits `name` and `email` to `/readCustomerInfoAndRespond` using a traditional form submission with the `POST` method. The server responds with a welcome message and a link back to the home page.

### Part B: REST API with `fetch()`

The second form sends the same fields as JSON to `/api/customer` using JavaScript. The response is displayed on the page without navigating away.

Example response:

```json
{
  "message": "Welcome Test User",
  "email": "test@example.com"
}
```

## Screenshots

### Traditional HTML Form

![Traditional HTML form](images/N3.2_web_traditinal_HTML-Form.png)

### Traditional Form Response

![Traditional form response](images/N3.2_web_traditinal_HTML-Form-output.png)

### REST API Response

![REST API response](<images/N3.2_web_REST-API-fatch().png>)

## Technologies

- Node.js
- Express
- HTML, CSS, and JavaScript