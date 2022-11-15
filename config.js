// Use this for configuration settings instead of scattering config "constants"
// throughout your application
export const API_BASE = "https://api.squiggle.com.au";
export const API_ENDPOINT = `${API_BASE}/?q=teams`;

// NOTE: the common approach is to set these values from environment variables
// and not to have the values "hard-coded" with the code.
// Then, you use the host or wherever the process is running to set the variables
// and you read them in here
// So if you do that it will look something like:
// export const API_BASE = process.env.API_BASE