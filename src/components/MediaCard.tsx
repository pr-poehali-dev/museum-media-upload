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

    if (
      ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(ext || "")
    ) {
      return "Image";
    } else if (
      ["mp4", "avi", "mov", "wmv", "mkv", "webm"].includes(ext || "")
    ) {
      return "Video";
    } else if (["pdf"].includes(ext || "")) {
      return "FileText";
    } else if (["doc", "docx"].includes(ext || "")) {
      return "FileText";
    } else if (["mp3", "wav", "flac", "aac"].includes(ext || "")) {
      return "Music";
    }
    return "File";
  };

  const getFileTypeColor = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();

    if (
      ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(ext || "")
    ) {
      return "bg-green-100 text-green-600";
    } else if (
      ["mp4", "avi", "mov", "wmv", "mkv", "webm"].includes(ext || "")
    ) {
      return "bg-purple-100 text-purple-600";
    } else if (["pdf"].includes(ext || "")) {
      return "bg-red-100 text-red-600";
    } else if (["doc", "docx"].includes(ext || "")) {
      return "bg-blue-100 text-blue-600";
    } else if (["mp3", "wav", "flac", "aac"].includes(ext || "")) {
      return "bg-orange-100 text-orange-600";
    }
    return "bg-gray-100 text-gray-600";
  };

  const isVideo = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    return ["mp4", "avi", "mov", "wmv", "mkv", "webm"].includes(ext || "");
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
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
      <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
        {item.preview ? (
          <>
            <img
              src={item.preview}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            {isVideo(item.name) && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <Icon name="Play" className="h-8 w-8 text-gray-700 ml-1" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${getFileTypeColor(item.name)}`}
            >
              <Icon name={getFileIcon(item.name)} className="h-8 w-8" />
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {item.name.split(".").pop()?.toUpperCase()}
            </span>
          </div>
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
