import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: false,
    apiVersion: process.env.SANITY_API_VERSION,
    token: process.env.SANITY_API_TOKEN,
  });
export async function generateVolunteerId() {
  const query = `*[_type == "volunteer"] | order(volunteerId desc) [0] { volunteerId }`;
  
  const latestVolunteer = await sanityClient.fetch(query);
  return latestVolunteer?.volunteerId ? latestVolunteer.volunteerId + 1 : 1;
}

export async function createVolunteer(data) {
  const newVolunteerId = await generateVolunteerId();
  
  const doc = {
    _type: "volunteer",
    volunteerId: newVolunteerId,
    ...data,
  };

  return sanityClient.create(doc);
}
