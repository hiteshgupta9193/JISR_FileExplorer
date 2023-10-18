type TItem = {
  type: "folder" | "file";
  id: string;
  name: string;
};

export type TFolder = TItem & {
  data: (TFolder | TFile)[];
};

export type TFile = TItem & {
  meta: string;
};

export type TFileExplorerData = TFolder;
