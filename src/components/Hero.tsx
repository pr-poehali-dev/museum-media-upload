const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-gray-900 mb-6">
          Истфак в музее
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Современная цифровая галерея для исторического факультета. Загружайте
          и делитесь материалами: фотографии, видео, документы, ссылки — всё в
          одном месте.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏛️</span>
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-3">
              Галерея музея
            </h3>
            <p className="text-gray-600">
              Официальная коллекция музейных экспонатов, документов и материалов
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-3">
              Наши работы
            </h3>
            <p className="text-gray-600">
              Студенческие проекты, исследования и творческие работы факультета
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
