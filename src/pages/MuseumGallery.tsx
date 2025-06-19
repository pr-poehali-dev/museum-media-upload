import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryUpload from "@/components/GalleryUpload";
import MediaGrid from "@/components/MediaGrid";

interface MediaItem {
  id: string;
  type: "file" | "link";
  name: string;
  description?: string;
  url?: string;
  file?: File;
  preview?: string;
}

const MuseumGallery = () => {
  const [items, setItems] = useState<MediaItem[]>([]);

  const handleItemsAdd = (newItems: MediaItem[]) => {
    setItems((prev) => [...prev, ...newItems]);
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            🏛️ Истфак в музее
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Загружайте и делитесь фотографиями, видео и материалами из музейных
            экспозиций
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <GalleryUpload onItemsAdd={handleItemsAdd} />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-lg min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-montserrat font-semibold text-2xl text-gray-900">
                  📁 Материалы
                </h2>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {items.length}{" "}
                  {items.length === 1
                    ? "файл"
                    : items.length < 5
                      ? "файла"
                      : "файлов"}
                </div>
              </div>
              <MediaGrid
                items={items}
                onRemoveItem={handleRemoveItem}
                emptyMessage="🎨 Добавьте первые материалы в галерею музея"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumGallery;
