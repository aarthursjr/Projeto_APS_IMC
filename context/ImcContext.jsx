import { createContext, useEffect, useState } from "react";
import { getIMCRecords, saveIMCRecords } from "../services/imcStorage";
import { calculateIMC } from "../utils/imc";

export const IMCContext = createContext();

export function IMCProvider({ children }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecords();
  }, []);

  async function loadRecords() {
    const data = await getIMCRecords();
    // Ordena os registros por data decrescente (só pra garantir)
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    setRecords(data);
    setLoading(false);
  }

  async function addRecord({ weight, height }) {
    setLoading(true);
    const imc = calculateIMC(weight, height);
    console.log(weight, height);
    const newRecord = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      weight,
      height,
      imc,
    };
    const updated = [newRecord, ...records];

    setRecords(updated);
    await saveIMCRecords(updated).then(() => {
      setLoading(false);
      console.log(records);
    });
  }

  return (
    <IMCContext.Provider value={{ records, loading, addRecord }}>
      {children}
    </IMCContext.Provider>
  );
}
