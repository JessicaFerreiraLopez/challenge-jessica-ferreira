import axios from "axios";
import { CategoryDTO } from "./types";
import { CATALOGO_API_HOST } from "../utils/constants";

export const getEquipamientoData = async (): Promise<CategoryDTO[]> => {
  const { data } = await axios
    .get(`${CATALOGO_API_HOST}/equipamiento`)
    .catch((error) => {
      throw new Error("Failed to get equipamiento Data");
    });

  return data;
};
export const getAberturasData = async (): Promise<CategoryDTO[]> => {
  const { data } = await axios
    .get(`${CATALOGO_API_HOST}/aberturas`)
    .catch((error) => {
      throw new Error("Failed to get aberturas Data");
    });

  return data;
};

export const getTerminacionesData = async (): Promise<CategoryDTO[]> => {
  const { data } = await axios
    .get(`${CATALOGO_API_HOST}/terminaciones`)
    .catch((error) => {
      throw new Error("Failed to get terminaciones Data");
    });

  return data;
};
