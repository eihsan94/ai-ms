import { useEffect, useState } from "react";

type RequestBody = {
  prompt?: string;
};
type ResponseBody = RequestBody;
type JSONResponse = ResponseBody | Error;

type DeepLRequest = {
  auth_key: string;
  text: string;
  target_lang: "EN";
};
type DeepLResponse = {
  translations: { detected_source_language: string; text: string }[];
};

const AUTH_KEY = process.env.NEXT_PUBLIC_DEEPL_AUTH_KEY;
const DEEPL_ENDPOINT = `https://api-free.deepl.com/v2/translate`;

export const useDeepL = (text: string) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const res = await deepl({ prompt: text });
      if (res instanceof Error) {
        setTranslated(res.message);
        return;
      }
      console.log(res);

      setTranslated(res.prompt || "");
    };
    fetch();
  }, [text]);
  return translated;
};

// TODO: Internal Server Error
// https://i69oudh614.execute-api.ap-northeast-1.amazonaws.com/default/generate?prompt=
export const getUrl = (text: string) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!text) {
      return;
    }
    const _fetch = async () => {
      // const res = await fetch(`https://i69oudh614.execute-api.ap-northeast-1.amazonaws.com/default/generate?prompt=${text}`)
      // setUrl();
    };
    _fetch();
  }, [text]);
  return url;
};

// TODO: remove this if this issue is solved 👎
const deepl = async (req: RequestBody): Promise<JSONResponse> => {
  const { prompt } = req;

  if (!prompt) {
    return Error("Bad Request");
  }

  return translate(prompt)
    .then(async (res) => {
      if (!res.ok) {
        return Promise.reject(new Error(`Error: ${res.status}`));
      }
      return joinDeepLResponse(await res.json());
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const translate = async (prompt: string) => {
  const req: DeepLRequest = {
    auth_key: AUTH_KEY || "",
    text: prompt,
    target_lang: "EN",
  };

  const init = {
    body: `auth_key=${req.auth_key}&text=${req.text}&target_lang=${req.target_lang}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    method: "POST",
  };
  return fetch(DEEPL_ENDPOINT, init);
};

const joinDeepLResponse = (res: DeepLResponse): ResponseBody => {
  return Object.assign({
    prompt: res.translations.map((t) => t.text).join(" "),
  });
};
