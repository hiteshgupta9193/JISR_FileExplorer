import { useState } from "react";
import FileItem from "./components/FileItem";
import { TFile, TFileExplorerData } from "../../types/fileExplorer.type";

function FileExplorer({ filesData }: { filesData: TFileExplorerData | null }) {
  if (filesData === null) {
    return null;
  }
  const { data: rootFolderData = [] } = filesData;
  const [selectedFileId, setSelectedFileId] = useState("");

  const onFileSelected = (file: TFile) => {
    setSelectedFileId(file.id);
  };
  return (
    <div className="file-explorer">
      {rootFolderData.map((item) => (
        <FileItem
          key={item.id}
          item={item}
          level={1}
          onFileSelected={onFileSelected}
          selectedFileId={selectedFileId}
        />
      ))}
    </div>
  );
}

export default FileExplorer;
