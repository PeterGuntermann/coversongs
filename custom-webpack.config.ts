import { config } from "dotenv";
import { EnvironmentPlugin } from "webpack";

config();

module.exports = {
    plugins: [
        new EnvironmentPlugin([
            // Vercel KV
            "KV_URL",
            "KV_REST_API_URL",
            "KV_REST_API_TOKEN",
            "KV_REST_API_READ_ONLY_TOKEN",
        ]),
    ],
};
