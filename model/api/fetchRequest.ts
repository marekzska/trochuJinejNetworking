import { formatForLog } from "@/lib/logs";
import { HttpEnum } from "@/model/enums/HttpEnum";

export async function fetchRequest<T>(
  url: string,
  queryString: string | null,
  method: HttpEnum = HttpEnum.GET,
  body?: object
): Promise<T> {
  const requestId = Math.random().toString(36).substring(7);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Transaction-ID": requestId,
  };

  const response = await fetch(
    `${url}${queryString ? `?${queryString}` : ""}`,
    {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
      next: {
        revalidate: 15,
      },
    }
  );

  console.log(
    `ℹ️ Sending request ${requestId} ${url} ${
      body ? formatForLog(JSON.stringify(body)) : ""
    }`
  );

  if (!response.ok) {
    const responseJson = await response.json();
    console.log(
      `❌ Request error! Response from ${requestId}: ${formatForLog(response)}`
    );
    throw new Error(responseJson.message);
  }

  if (response.status === 204) {
    console.log(`ℹ️ Response from ${requestId}: status: ${response.status}`);
    return undefined as T;
  }

  let responseJson = undefined;
  try {
    responseJson = await response.json();
  } catch (error) {
    console.log(`❌ Response error from ${requestId}`);
    throw new Error("Response is not JSON");
  }

  console.log(
    `ℹ️ Response from ${requestId}: status: ${
      response.status
    }, body: ${formatForLog(responseJson)}`
  );

  return responseJson;
}
