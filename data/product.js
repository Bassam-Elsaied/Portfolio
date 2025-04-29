import lifePost from "../public/images/life-post.vercel.app.png";
import lifePost2 from "../public/images/life-post2.vercel.app.png";
import xFuture from "../public/images/x-future-ecommerce.vercel.app.png";
import xFuture2 from "../public/images/checkout.xFuture2.png";
import zentry from "../public/images/zentry-clone-six-tau.vercel.app.png";
import zentry2 from "../public/images/zentry-clone-six-tau.vercel2.app.png";
import popcorn from "../public/images/popcorn-movie-xi.vercel.app.png";
import popcorn2 from "../public/images/popcorn-movie-xi.vercel2.app.png";
import myProtfolio from "../public/images/my-portfolio-snowy-nu-82.vercel.png";
import myProtfolio2 from "../public/images/my-portfolio-snowy-nu-82.png";

export const products = [
  {
    href: "https://life-post.vercel.app/",
    title: "Life Post",
    description_en:
      "A wep that you can signin and see , share your posts with the world.",
    description_ar:
      "موقع ويب يمكنك تسجيل الدخول إليه ورؤيته ومشاركة منشوراتك مع العالم.",
    thumbnail: lifePost,
    images: [lifePost, lifePost2],
    stack: ["Nextjs", "Reactjs", "Tailwindcss", "Sanity", "Shadcn"],
    slug: "LifePost",
    content_en:
      "A sleek and fully responsive web application built with Next.js 15, leveraging Tailwind CSS for styling and ShadCN for UI components. It features a dynamic content management system powered by Sanity and a secure authentication system. Designed for scalability and optimal user experience.",
    content_ar:
      "تطبيق ويب أنيق وسريع الاستجابة، مبني باستخدام Next.js 15، مستفيدًا من Tailwind CSS للتصميم وShadCN لمكونات واجهة المستخدم. يتميز بنظام إدارة محتوى ديناميكي مدعوم من Sanity ونظام مصادقة آمن. مصمم لقابلية التوسع وتجربة مستخدم مثالية.",
  },
  {
    href: "https://x-future-ecommerce.vercel.app",
    title: "xFuture",
    description_en:
      "Practice for E-commerce website that provides product you can buy and pay",
    description_ar:
      "التدريب على موقع التجارة الإلكترونية الذي يوفر منتجًا يمكنك شراؤه والدفع مقابله",
    thumbnail: xFuture,
    images: [xFuture, xFuture2],
    stack: ["Nextjs", "Tailwindcss", "shadcn", "sanity", "stripe"],
    slug: "xfuture",
    content_en:
      "is a modern e-commerce platform built with Next.js, leveraging Sanity as a headless CMS, ShadCN for elegant UI components, and Tailwind CSS for a responsive design. The platform integrates Stripe for secure and seamless payment processing, ensuring a smooth shopping experience. With a focus on performance, accessibility, and scalability, the project delivers a fast and visually appealing online store.",
    content_ar:
      "منصة تجارة إلكترونية حديثة مبنية باستخدام Next.js، مستفيدة من Sanity كنظام إدارة محتوى بدون واجهة مستخدم، وShadCN لمكونات واجهة مستخدم أنيقة، وTailwind CSS لتصميم متجاوب. تدمج المنصة Stripe لمعالجة دفعات آمنة وسلسة، مما يضمن تجربة تسوق سلسة. مع التركيز على الأداء وسهولة الوصول وقابلية التوسع، يقدم المشروع متجرًا إلكترونيًا سريعًا وجذابًا بصريًا.",
  },
  {
    href: "https://zentry-clone-six-tau.vercel.app/",
    title: "Zenty clone",
    description_en:
      " the project’s purpose is standout animations you implemented! ",
    description_ar: "غرض المشروع هو اظهار رسوم متحركة بارزة قمت بتنفيذها! ",
    thumbnail: zentry,
    images: [zentry, zentry2],
    stack: ["Reactjs", "Tailwindcss", "GSAP"],
    slug: "zentry",
    content_en:
      "is a dynamic and visually engaging web experience built with React and powered by GSAP animations. The project features smooth transitions, interactive elements, and eye-catching motion effects, creating an immersive user experience. Leveraging GSAP’s timeline and scroll-based animations, the interface delivers fluid interactions, enhancing usability and engagement.",
    content_ar:
      "تجربة ويب ديناميكية وجذابة بصريًا، مبنية باستخدام React ومدعومة برسومات GSAP المتحركة. يتميز المشروع بانتقالات سلسة وعناصر تفاعلية وتأثيرات حركية جذابة، مما يخلق تجربة مستخدم غامرة. باستخدام المخطط الزمني والرسوم المتحركة القائمة على التمرير من GSAP، توفر الواجهة تفاعلات سلسة، مما يعزز سهولة الاستخدام والتفاعل.",
  },
  {
    href: "https://popcorn-movie-xi.vercel.app/",
    title: "PopCorn Movie",
    description_en:
      "This application serves as a simple yet effective tool for movie lovers to manage and rate their favorite films seamlessly",
    description_ar:
      "يُعد هذا التطبيق بمثابة أداة بسيطة وفعالة لمحبي الأفلام لإدارة أفلامهم المفضلة وتقييمها بسلاسة",
    thumbnail: popcorn,
    images: [popcorn, popcorn2],
    stack: ["Reactjs", "Css", "Api"],
    slug: "Popcorn",
    content_en:
      "is a sleek and interactive movie browsing application built with React. Users can explore a vast collection of movies, save their favorites to a personal watchlist, and rate them using a star system. The app features a responsive design with Css and dynamic animations for an engaging user experience.",
    content_ar:
      "تطبيق أنيق وتفاعلي لتصفح الأفلام، مُصمم بتقنية React. يُتيح التطبيق للمستخدمين استكشاف مجموعة واسعة من الأفلام، وحفظ أفلامهم المفضلة في قائمة مشاهدة شخصية، وتقييمها بنظام النجوم. يتميز التطبيق بتصميم متجاوب مع CSS ورسوم متحركة ديناميكية لتجربة مستخدم تفاعلية.",
  },
  {
    href: "https://my-portfolio-snowy-nu-82.vercel.app",
    title: "Bassam portfolio",
    description_en:
      "Another personal website with some animation ",
    description_ar:
      "موقع شخصي آخر مع بعض الانيميشن",
    thumbnail: myProtfolio,
    images: [myProtfolio, myProtfolio2],
    stack: ["Nextjs", "Reactjs", "framerMotion", "Tailwindcss"],
    slug: "BassamPortfolio",
    content_en:
    "My personal website as a front-end developer, showcasing my work, skills, and projects using the latest web technologies like Next.js, React, and Tailwind CSS. The site was carefully designed to provide a seamless user experience and a look that is truly my identity and attention to detail.",
    content_ar:
    "موقعي الشخصي كمطور واجهات أمامية، أعرض فيه أعمالي، مهاراتي، ومشاريعي باستخدام أحدث تقنيات الويب مثل Next.js، React، وTailwind CSS. تم تصميم الموقع بعناية ليوفر تجربة مستخدم سلسة ومظهر عصري يعكس هويتي البرمجية واهتمامي بالتفاصيل.",
  },
];
