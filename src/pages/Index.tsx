import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
              Разделы галереи
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Выберите нужный раздел для загрузки и просмотра материалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Building2" className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-3">
                  Галерея музея
                </h3>
                <p className="text-gray-600 mb-6">
                  Официальная коллекция музейных экспонатов, исторических
                  документов и артефактов. Здесь собраны материалы музейного
                  фонда.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Поддержка всех форматов файлов
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Добавление ссылок на внешние ресурсы
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Удобная организация материалов
                </div>
              </div>

              <Link to="/gallery">
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                  Перейти в галерею
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name="GraduationCap"
                    className="h-10 w-10 text-purple-600"
                  />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-3">
                  Наши работы
                </h3>
                <p className="text-gray-600 mb-6">
                  Студенческие проекты, исследования и творческие работы
                  исторического факультета. Место для демонстрации достижений.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Исследовательские проекты
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Творческие работы студентов
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Презентации и доклады
                </div>
              </div>

              <Link to="/works">
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                  Посмотреть работы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
