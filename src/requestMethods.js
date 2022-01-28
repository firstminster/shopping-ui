import axios from "axios";

const BASE_URL = " http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRmYjhkNGMwNzc3MjcwNGExOThhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzI1NTg5MSwiZXhwIjoxNjQzNTE1MDkxfQ.lCYMkaL5TD3v9jd-AmxK_N2TrJ8NGMGfYqoxMlkzEbY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
