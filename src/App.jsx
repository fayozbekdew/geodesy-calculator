import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Calculator from "./pages/Calculator";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="calculate" element={<Calculator />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Section 1: Geodeziya fani haqida */}
      <section className="bg-gray-100 p-8 mb-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Geodeziya Fani</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-full">
            <p>
              Geodeziya — yerning shakli, uning fizik xossalari, gravitatsiya va o'lchov tizimlari bilan shug'ullanuvchi fan.
              Ushbu fan qadimgi Gretsiyadan kelib chiqqan bo'lib, bugungi kunda yer o'lchovlarini aniqlashda, infratuzilma
              loyihalarini rejalashtirishda va qurilish ishlari uchun juda muhim hisoblanadi.
            </p>
            <p className="mt-4">
              Geodeziya fanining asosiy yo'nalishlari:
              <ul className="list-disc list-inside mt-2">
                <li><strong>Topografik xaritalar yaratish:</strong> Yer yuzining umumiy ko'rinishini aniqlash.</li>
                <li><strong>Geodezik o'lchovlar:</strong> Aniq koordinatalarni va nuqta o'rnini belgilash.</li>
                <li><strong>Kosmik geodeziya:</strong> Sun'iy yo'ldoshlar yordamida keng ko'lamli o'lchovlar olib borish.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Geodeziya Asboblari */}
      <section className="bg-gray-100 p-8 mb-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Geodeziya Asboblari</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-full">
            <p>
              Geodeziya ishlarida qo'llaniladigan asboblar o'lchovlarni aniq va ishonchli qilish uchun mo'ljallangan. 
              Eng keng tarqalgan asbob-uskunalar:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Total Stansiya:</strong> U nafaqat masofalarni, balki burchaklarni o'lchash uchun ham ishlatiladi. Har bir nuqta uchun uch o'lchamli koordinatalar olinadi.</li>
              <li><strong>Nivo:</strong> Gorizont tekisligini o'lchash uchun ishlatiladigan qurilma. Bu qurilma bino va inshootlarning to'g'ri joylashishini ta'minlaydi.</li>
              <li><strong>GPS tizimlari:</strong> Sun'iy yo'ldoshlar orqali nuqtalar orasidagi koordinatalarni aniqlash uchun foydalaniladi. Bu texnologiya yuqori aniqlikni ta'minlaydi.</li>
              <li><strong>Lazer skanerlari:</strong> Yerni lazerlar orqali 3D formatida o'lchash va o'rganish imkonini beradi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Geodezik Hisob-kitoblar */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Geodezik Hisob-kitoblar</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-full">
            <p>
              Geodezik hisob-kitoblar yerning harakatlanishini, shaklini va o'lchovlarini aniq aniqlash uchun ishlatiladi.
              Bu hisob-kitoblar murakkab matematik va trigonometrik formulalarga asoslangan bo'lib, quyidagi usullardan foydalaniladi:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Trilateratsiya:</strong> Bir nuqtadan turib uch yoki undan ortiq boshqa nuqtalargacha bo'lgan masofani o'lchash orqali yer yuzasining aniq shaklini aniqlash.</li>
              <li><strong>Triangulyatsiya:</strong> Bir nechta uchburchaklarni yaratish va burchaklarni o'lchash orqali koordinatalarni hisoblash usuli.</li>
              <li><strong>Poligoniya:</strong> Qator nuqtalar bo'yicha yerni segmentlarga bo'lish va har bir segmentning uzunligi va burchagini hisoblash.</li>
              <li><strong>Koordinatalarni transformatsiya qilish:</strong> Global koordinata tizimidan mahalliy tizimga yoki aksincha aylantirish usullari.</li>
            </ul>
            <p className="mt-4">
              Geodezik hisob-kitoblar loyihalarni to'g'ri bajarish va joylashtirish uchun muhim ahamiyatga ega bo'lib, ayniqsa, katta inshootlar va qurilish ishlari uchun zarur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
