import { CategoryDTO } from "./apiCalls";
import axios, { Method } from "axios";

export const getEquipamientoData = async (): Promise<
  CategoryDTO[] | undefined
> => {
  const { data } = await axios.get("/equipamiento").catch((error) => {
    throw new Error("Failed to get equipamiento Data");
  });

  return data;
};

export const getAberturasData = async (): Promise<CategoryDTO[] | undefined> => {
  const { data } = await axios.get("/aberturas").catch((error) => {
    throw new Error("Failed to get aberturas Data");
  });

  return data;
};

export const getTerminacionesData = async (): Promise<
  CategoryDTO[] | undefined
> => {
  const { data } = await axios.get("/terminaciones").catch((error) => {
    throw new Error("Failed to get terminaciones Data");
  });

  return data;
};
