const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://cnietsche:n8TyRsdyVSYguSg0@cluster0.n5diuhy.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado no banco de dados!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;