import { Code, Globe, Smartphone, Layout, Database, Sparkles } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "بناء واجهات مستخدم حديثة باستخدام React و Next.js مع أداء عالي وتجربة مستخدم ممتازة.",
    icon: Layout,
  },
  {
    title: "Responsive Websites",
    description:
      "تصميم مواقع متجاوبة تعمل على جميع الأجهزة (موبايل - تابلت - ديسكتوب).",
    icon: Smartphone,
  },
  {
    title: "Full Stack Development",
    description:
      "تطوير تطبيقات كاملة باستخدام Node.js, Prisma و Databases قوية.",
    icon: Database,
  },
  {
    title: "API Integration",
    description:
      "ربط الموقع مع APIs خارجية مثل الدفع، الخرائط، أو خدمات الطرف الثالث.",
    icon: Globe,
  },
  {
    title: "UI/UX Improvement",
    description:
      "تحسين تجربة المستخدم وتصميم واجهات جذابة وسهلة الاستخدام.",
    icon: Sparkles,
  },
  {
    title: "Clean Code",
    description:
      "كتابة كود منظم وقابل للتطوير مع أفضل ممارسات البرمجة.",
    icon: Code,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-[#0f172a] text-white"
      aria-label="Services Section"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My Services
        </h2>
        <p className="text-gray-400 mt-3">
          خدماتي في تطوير المواقع والتطبيقات الحديثة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#1e293b] hover:bg-[#273449] transition duration-300 shadow-lg"
            >
              <Icon className="w-10 h-10 text-blue-400 mb-4" />

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;