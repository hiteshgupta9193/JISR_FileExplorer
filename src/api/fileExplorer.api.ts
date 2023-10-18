import { TFileExplorerData } from "../types/fileExplorer.type";
const filesData: TFileExplorerData = {
  type: "folder",
  id: "1",
  name: "parent",
  data: [
    {
      type: "folder",
      id: "2",
      name: "root",
      data: [
        {
          type: "folder",
          id: "3",
          name: "src",
          data: [
            {
              type: "file",
              meta: "js",
              id: "4",
              name: "index.js"
            }
          ]
        },
        {
          type: "folder",
          id: "5",
          name: "public",
          data: [
            {
              type: "file",
              meta: "ts",
              id: "6",
              name: "index.ts"
            }
          ]
        },
        {
          type: "file",
          meta: "html",
          id: "7",
          name: "index.html"
        },
        {
          type: "folder",
          id: "8",
          name: "data",
          data: [
            {
              type: "folder",
              id: "9",
              name: "images",
              data: [
                {
                  type: "file",
                  meta: "img",
                  id: "10",
                  name: "image.png"
                },
                {
                  type: "file",
                  meta: "img",
                  id: "11",
                  name: "image2.webp"
                }
              ]
            },
            {
              type: "file",
              meta: "svg",
              id: "12",
              name: "logo.svg"
            }
          ]
        }
      ]
    }
  ]
};

export async function getFileExplorerData(): Promise<TFileExplorerData> {
  return filesData;
}
