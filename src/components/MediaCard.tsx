import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface MediaItem {
  id: string;
  type: "file" | "link";
  name: string;
  description?: string;
  url?: string;
  file?: File;
  preview?: string;
}

interface MediaCardProps {
  item: MediaItem;
  onRemove?: (id: string) => void;
}

const MediaCard = ({ item, onRemove }: MediaCardProps) => {
  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext || "")) {
      return "Image";
    } else if (["mp4", "avi", "mov", "wmv"].includes(ext || "")) {
      return "Video";
    } else if (["pdf"].includes(ext || "")) {
      return "FileText";
    } else if (["doc", "docx"].includes(ext || "")) {
      return "FileText";
    } else if (["mp3", "wav", "flac"].includes(ext || "")) {
      return "Music";
    }
    return "File";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (item.type === "link") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="Link" className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 truncate">{item.url}</p>
            </div>
          </div>

          {onRemove && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Icon name="X" className="h-4 w-4" />
            </Button>
          )}
        </div>

        {item.description && (
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        )}

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
          Открыть ссылку
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {item.preview ? (
          <img
            src={item.preview}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon
            name={getFileIcon(item.name)}
            className="h-12 w-12 text-gray-400"
          />
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-gray-900 truncate flex-1">
            {item.name}
          </h4>

          {onRemove && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500 ml-2"
            >
              <Icon name="X" className="h-4 w-4" />
            </Button>
          )}
        </div>

        {item.file && (
          <p className="text-sm text-gray-500">
            {formatFileSize(item.file.size)}
          </p>
        )}

        {item.description && (
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
