import { createClient } from "next-sanity";
import { config } from "./config";
import imageUrlBuilder from "@sanity/image-url";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);


const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
