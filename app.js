const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Parse traditional HTML form submissions
app.use(express.urlencoded({ extended: true }));

// Parse JSON sent by fetch()
app.use(express.json());

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

function getCustomerInput(body) {
    body = body || {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

    return { name, email };
}

// PART A - Traditional HTML form submission
app.post("/readCustomerInfoAndRespond", (req, res) => {
    const { name, email } = getCustomerInput(req.body);

    if (!name || !email) {
        return res.status(400).send("Name and email are required.<br><br><a href=\"/\">Go Back</a>");
    }

    res.send(
        "Welcome " +
        name +
        "<br>We will contact you at " +
        email +
        '<br><br><a href="/">Go Back</a>'
    );
});

// PART B - REST / JSON endpoint
app.post("/api/customer", (req, res) => {
    const { name, email } = getCustomerInput(req.body);

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required.",
        });
    }

    res.json({
        message: "Welcome " + name,
        email: email,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
