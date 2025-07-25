import { CHAT_GROUP, CHAT_GROUP_USERS } from "@/lib/apiAuthRoutes";

export async function fetchChatGroups(token: string) {
  const res = await fetch(CHAT_GROUP, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return [];
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}

export async function fetchChatGroup(id: string) {

  try {
    const res = await fetch(`${CHAT_GROUP}/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      console.log("Fetch failed with status", res.status);
      return [];
    }

    const response = await res.json();
    return response?.data || null;
  } catch (error) {
    console.error("Error in fetchChatGroup:", error);
    return [];
  }
}

export async function fetchChatGroupUsers(id: string) {
  const res = await fetch(`${CHAT_GROUP_USERS}?group_id=${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return [];
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}