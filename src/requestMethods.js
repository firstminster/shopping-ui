import axios from "axios";

const BASE_URL = " http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRmYjhkNGMwNzc3MjcwNGExOThhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzU3Nzg3MiwiZXhwIjoxNjQzODM3MDcyfQ.of4xGxLh-Z2f5pVJdxyW6F3ePy-GJs3gQPsnFD0xocM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
