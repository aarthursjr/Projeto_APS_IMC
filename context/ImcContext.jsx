import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const IMCContext = createContext();

const STORAGE_KEY = "@imc_records";

export function IMCProvider({ children }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords();
  }, []);

  async function loadRecords() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed = JSON.parse(stored);

        // proteção contra dados inválidos
        if (Array.isArray(parsed)) {
          setRecords(parsed);
        } else {
          setRecords([]);
        }
      }
    } catch (error) {
      console.log("Erro ao carregar histórico:", error);
    }
  }

  useEffect(() => {
    saveRecords(records);
  }, [records]);

  async function saveRecords(data) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.log("Erro ao salvar histórico:", error);
    }
  }

  //Adicionar registro
  function addRecord(newRecord) {
    const recordWithId = {
      ...newRecord,
      id: newRecord.id || Date.now().toString(),
    };

    setRecords((prev) => [recordWithId, ...prev]); // mais recente primeiro
  }

  //Remover
  function removeRecord(id) {
    if (!id) return;

    setRecords((prev) => prev.filter((item) => item.id !== id));
  }

  //Limpar
  function clearRecords() {
    setRecords([]);
  }

  return (
    <IMCContext.Provider
      value={{
        records,
        addRecord,
        removeRecord,
        clearRecords,
      }}
    >
      {children}
    </IMCContext.Provider>
  );
}