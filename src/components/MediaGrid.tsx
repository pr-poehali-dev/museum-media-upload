import MediaCard from "./MediaCard";

interface MediaItem {
  id: string;
  type: "file" | "link";
  name: string;
  description?: string;
  url?: string;
  file?: File;
  preview?: string;
}

interface MediaGridProps {
  items: MediaItem[];
  onRemoveItem?: (id: string) => void;
  emptyMessage?: string;
}

const MediaGrid = ({
  items,
  onRemoveItem,
  emptyMessage = "Пока нет загруженных материалов",
}: MediaGridProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">📁</span>
        </div>
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} onRemove={onRemoveItem} />
      ))}
    </div>
  );
};

export default MediaGrid;
