import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface UploadItem {
  id: string;
  type: "file" | "link";
  name: string;
  description?: string;
  url?: string;
  file?: File;
  preview?: string;
}

interface GalleryUploadProps {
  onItemsAdd: (items: UploadItem[]) => void;
}

const GalleryUpload = ({ onItemsAdd }: GalleryUploadProps) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkDescription, setLinkDescription] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newItems: UploadItem[] = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        type: "file",
        name: file.name,
        file,
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : undefined,
      }));

      onItemsAdd(newItems);
    },
    [onItemsAdd],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "application/*": [],
      "text/*": [],
      "audio/*": [],
    },
  });

  const handleAddLink = () => {
    if (!linkUrl.trim()) return;

    const newItem: UploadItem = {
      id: Math.random().toString(36).substr(2, 9),
      type: "link",
      name: linkName || linkUrl,
      description: linkDescription,
      url: linkUrl,
    };

    onItemsAdd([newItem]);
    setLinkUrl("");
    setLinkName("");
    setLinkDescription("");
  };

  return (
    <div className="space-y-8">
      {/* File Upload */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="font-montserrat font-semibold text-xl mb-6">
          Загрузка файлов
        </h3>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-primary/50"
          }`}
        >
          <input {...getInputProps()} />
          <Icon
            name="Upload"
            className="h-12 w-12 text-gray-400 mx-auto mb-4"
          />

          {isDragActive ? (
            <p className="text-primary font-medium">Отпустите файлы здесь...</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                Перетащите файлы сюда или нажмите для выбора
              </p>
              <p className="text-sm text-gray-400">
                Поддерживаются: изображения, видео, документы, аудио
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Link Upload */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="font-montserrat font-semibold text-xl mb-6">
          Добавление ссылки
        </h3>

        <div className="grid gap-4">
          <div>
            <Label htmlFor="link-url">URL ссылки *</Label>
            <Input
              id="link-url"
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="link-name">Название (необязательно)</Label>
            <Input
              id="link-name"
              value={linkName}
              onChange={(e) => setLinkName(e.target.value)}
              placeholder="Название ссылки"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="link-description">Описание (необязательно)</Label>
            <Textarea
              id="link-description"
              value={linkDescription}
              onChange={(e) => setLinkDescription(e.target.value)}
              placeholder="Краткое описание содержимого"
              className="mt-1"
              rows={3}
            />
          </div>

          <Button
            onClick={handleAddLink}
            disabled={!linkUrl.trim()}
            className="w-full mt-2"
          >
            <Icon name="Plus" className="h-4 w-4 mr-2" />
            Добавить ссылку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryUpload;
