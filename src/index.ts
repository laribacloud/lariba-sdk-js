export class Lariba {
  constructor(private apiKey: string, private baseUrl = "http://localhost:8000") {}

  async track(event: string, properties: Record<string, any> = {}) {
    const res = await fetch(`${this.baseUrl}/v1/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey
      },
      body: JSON.stringify({
        event,
        properties,
        timestamp: new Date().toISOString()
      })
    });

    if (!res.ok) {
      throw new Error(`Lariba API error: ${res.status}`);
    }

    return res.json();
  }
}