import { useState } from "react";
import { TFile, TFolder } from "../../../../types/fileExplorer.type";
// import FileIcon from "../FileIcon";
import ContextMenu from "../../../ContextMenu";
import "./styles.css";

function FileItem({
  item,
  level,
  onFileSelected,
  selectedFileId
}: {
  item: TFile | TFolder;
  level: number;
  onFileSelected: (item: TFile | TFolder) => void;
  selectedFileId: string;
}) {
  const {
    name,
    type
    // meta = "folder"
  } = item;
  const isFolder = type === "folder";
  let data = [];
  if (isFolder) {
    data = (item as TFolder).data;
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const [contextMenuOptions, setContextMenuOptions] = useState({
    visible: false,
    x: 0,
    y: 0,
    options: [
      {
        label: "Rename",
        handler: (option) => {
          console.log("Rename", option, item.name);
        }
      },
      {
        label: "Copy",
        handler: (option) => {
          console.log("Copy", option, item.name);
        }
      },
      {
        label: "Delete",
        handler: (option) => {
          console.log("Delete", option, item.name);
        }
      }
      // { label: "Rename" },
      // { label: "Copy" },
      // { label: "Delete" }
    ]
  });

  const onClickHandler = (e) => {
    setIsExpanded(!isExpanded);
    e.stopPropagation();
    if (!isFolder) {
      onFileSelected(item);
    }
  };

  const contextMenuCloseHandler = () => {
    setContextMenuOptions((previousOptions) => ({
      ...previousOptions,
      visible: false,
      x: 0,
      y: 0
    }));
    document.removeEventListener("click", contextMenuCloseHandler);
  };

  const contextMenuhandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setContextMenuOptions((previousOptions) => ({
      ...previousOptions,
      visible: true,
      x: e.clientX,
      y: e.clientY
    }));

    document.addEventListener("click", contextMenuCloseHandler);
  };

  return (
    <div
      className={`file-item ${isFolder ? "folder" : "file"}${
        !isFolder && selectedFileId === item.id ? " selected" : ""
      }`}
      onClick={onClickHandler}
      onContextMenu={contextMenuhandler}
      // style={{ paddingLeft: `${level * 25}px` }}
    >
      <ContextMenu {...contextMenuOptions} onClose={contextMenuCloseHandler} />
      <div className="item-details">
        <span className="item-name">
          {/* Can use this component to display icons using meta
            <FileIcon meta={meta} />
          */}
          {isFolder ? "📂" : "📄"} <span>{name}</span>
        </span>
      </div>
      {isFolder && (
        <div
          className="explorer-item-children"
          style={{ display: isExpanded ? "block" : "none" }}
        >
          {data.map((child) => (
            <FileItem
              key={child.id}
              item={child}
              level={level + 1}
              onFileSelected={onFileSelected}
              selectedFileId={selectedFileId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FileItem;
