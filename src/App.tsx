import { useEffect, useState } from "react";
import { getFileExplorerData } from "./api/fileExplorer.api";
import FileExplorer from "./components/FileExplorer";
import "./styles.css";
import { TFileExplorerData } from "./types/fileExplorer.type";

export default function App() {
  const [filesData, setFilesData] = useState({});

  useEffect(() => {
    getFileExplorerData().then((data: TFileExplorerData) => {
      console.log(data);
      setFilesData(data);
    });
  }, []);
  return (
    <div className="App">
      {filesData !== null && (
        <FileExplorer
          filesData={Object.keys(filesData).length > 0 ? filesData : null}
        />
      )}
    </div>
  );
}
