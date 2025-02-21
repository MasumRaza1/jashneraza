import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "f5soi4ik", // Replace with your actual Sanity project ID
  dataset: "production", // Use "production" or your dataset name
  apiVersion: "2023-01-01", // Use the latest API version
  useCdn: false, 
  token: "your_sanity_token",
});

export default sanityClient;
