import { createClient } from "@supabase/supabase-js";

// Supabase client instance with required environment variables
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "", // Ensure the variable is defined
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "" // Fallback to empty string to avoid runtime errors
);

// Truncate a string to a maximum length with ellipsis
export const truncateString = (input: string, maxLength = 60): string => {
  if (!input || typeof input !== "string") {
    console.warn("Invalid input provided to truncateString.");
    return "";
  }
  return input.length <= maxLength ? input : `${input.slice(0, maxLength)}...`;
};

// Validate a URL and determine its type
export const validateURLString = (url: string): { url: string | undefined; type: "YOUTUBE" | "LOOM" | "IMAGE" } => {
  if (!url || typeof url !== "string") {
    console.warn("Invalid URL provided to validateURLString.");
    return { url: undefined, type: "IMAGE" }; // Default fallback for invalid input
  }

  const youtubeRegex = /www\.youtube\.com/;
  const loomRegex = /www\.loom\.com/;

  if (youtubeRegex.test(url)) {
    return { url, type: "YOUTUBE" };
  }

  if (loomRegex.test(url)) {
    return { url, type: "LOOM" };
  }

  return { url: undefined, type: "IMAGE" };
};
