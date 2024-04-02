// 範例API
import { axiosHelper } from "../axiosHelper";

const getItems_Url = 'https://apiservice.mol.gov.tw/OdService/rest/tag?limit=50&offset=0';
export const getItems = () => axiosHelper.get(getItems_Url);

// const getItems2_Url = 'https://apiservice.mol.gov.tw/OdService/rest/tag?limit=50&offset=0';
// export const getItems2 = axiosHelper.post(getItems2_Url, {});