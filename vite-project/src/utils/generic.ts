import { AxiosResponse, HttpStatusCode } from "axios";

/** 下載PDF */
export const download_PDF = (
  fileData: string,
  fileName: string,
  preview?: boolean
) => {
  const linkSource = `data:application/pdf;base64,${fileData}`;
  if (preview) {
    fetch(linkSource)
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((blobUrl) => window.open(blobUrl));
  } else {
    const downloadLink = document.createElement("a");
    const name = fileName;

    downloadLink.href = linkSource;
    downloadLink.download = name;
    downloadLink.click();
  }
};

/** 確認API回傳狀態 */
export const checkApiResponse = (
  apiResult: AxiosResponse,
  httpStatusCode = HttpStatusCode.Ok,
): boolean => {
  return apiResult && apiResult.status === httpStatusCode;
};
