export const host = "http://localhost:5002";

export async function updateAlpha() {
  const response = await fetch("/updateAlpha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: "example" }),
  });
  return response.json();
}

export async function fetchAlpha() {
  const response = await fetch("/fetchAlpha", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
