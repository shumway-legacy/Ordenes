/* Estilos básicos */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #333;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
}

form {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-weight: 400;
}

input, textarea {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background: #f9f9f9;
}

textarea {
    resize: vertical;
}

button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #ffffff;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
}

li .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

li button {
    margin-left: 10px;
}

li button.delete {
    background: #ff3b30;
}

li button.edit {
    background: #007bff;
}

li button:hover {
    opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }

    input, textarea {
        padding: 10px;
    }

    button {
        padding: 10px;
        font-size: 14px;
    }

    li {
        font-size: 14px;
        padding: 12px;
    }
}
