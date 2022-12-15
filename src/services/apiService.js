import getData from "./httpService";

export async function apiGetState() {
  const getStates = await getData("/api/v1/localidades/estados?orderBy=nome");
  return getStates;
  //ok
}

export async function apiGetTown(state) {
  const getTown = await getData(
    `/api/v1/localidades/estados/${state}/municipios?orderBy=nome`
  );
  return getTown;
} //ok

export async function apiGetDataTown(town) {
  const getTownData = await getData(
    `/api/v1/localidades/municipios/${town}/distritos`
  ); //ok
  return getTownData;
}
