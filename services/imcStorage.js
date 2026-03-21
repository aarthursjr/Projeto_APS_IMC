// /src/services/imcStorage.js
import { appKey } from "../constants/imc";
import { storage } from "./storage";

export async function getIMCRecords() {
  return (await storage.get(appKey)) || [];
}

export async function saveIMCRecords(records) {
  await storage.set(appKey, records);
}
