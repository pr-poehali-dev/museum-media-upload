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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            🏛️ Галерея музея
          </h1>
          <p className="text-gray-600 text-lg">
            Официальная коллекция музейных экспонатов, документов и материалов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <GalleryUpload onItemsAdd={handleItemsAdd} />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="font-montserrat font-semibold text-xl mb-6">
                Материалы ({items.length})
              </h2>
              <MediaGrid
                items={items}
                onRemoveItem={handleRemoveItem}
                emptyMessage="Добавьте первый материал в музейную галерею"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumGallery;
