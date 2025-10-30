export async function POST(req) {
  try {
    const data = await req.json();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwTrLt-D3YHtKByuCAf7tTdeYz5Av-Ml1ZOcleo7_FEHN177ezull3jjLtilYWN6pt97Q/exec";

    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error forwarding to Google Script:", error);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
