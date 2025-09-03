export async function translateTextServer(
  text: string,
  source = "en",
  target = "pt"
): Promise<string> {
  const url = process.env.TRANSLATE_API_URL!;
  
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
 
    body: JSON.stringify({ q: text, source, target, format: "text" }),
    cache: "no-store",
  });

  if (!res.ok) {

    return text;
  }

  const data = await res.json();
  return data.translatedText ?? text;
}