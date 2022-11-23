// Use this for configuration settings instead of scattering config "constants"
// throughout your application
export const default_category = "all";
export const default_year = 0;
export const default_order = "desc";
export const default_limit = 6;

export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const CONTACT_FORM_ENDPOINT = "/api/contact/";
export const CONTACT_FORM_TABLE_NAME = "contact_subs";