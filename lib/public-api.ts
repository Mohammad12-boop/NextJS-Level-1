import "server-only";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function fetchRecords<T>(resource: string): Promise<T[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${resource}?_limit=5`,
    { cache: "no-store", signal: AbortSignal.timeout(8000) },
  );

  if (!response.ok) {
    throw new Error("Public API request failed.");
  }

  return response.json() as Promise<T[]>;
}

export function fetchPosts() {
  return fetchRecords<Post>("posts");
}

export function fetchUsers() {
  return fetchRecords<User>("users");
}
