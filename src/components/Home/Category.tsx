"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Building, Key, Heart, Plane, MapPin, Calendar, Users } from "lucide-react";

interface CategoryItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

function Category() {
  // تعریف دسته‌بندی‌ها با آیکون‌های مناسب
  const categories: CategoryItem[] = [
    { 
      id: 1, 
      name: "ویزا", 
      icon: <FileText className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "انواع ویزاهای توریستی، کاری و تحصیلی"
    },
    { 
      id: 2, 
      name: "هتل", 
      icon: <Building className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "رزرو هتل‌های لوکس و اقتصادی"
    },
    { 
      id: 3, 
      name: "مسکن", 
      icon: <Key className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "خرید و اجاره ملک در کشورهای مقصد"
    },
    { 
      id: 4, 
      name: "ازدواج", 
      icon: <Heart className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "برگزاری مراسم ازدواج در کشورهای مقصد"
    },
    { 
      id: 5, 
      name: "مراسمات", 
      icon: <Calendar className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "سازماندهی مراسمات خاص و تشریفات"
    },
    { 
      id: 6, 
      name: "تور", 
      icon: <MapPin className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "تورهای تخصصی و سفرهای گروهی"
    },
    { 
      id: 7, 
      name: "مهاجرت", 
      icon: <Plane className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "فرصت‌های مهاجرت و اخذ تابعیت"
    },
    { 
      id: 8, 
      name: "خدمات", 
      icon: <Users className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: "مشاوره و خدمات پس از سفر"
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-thin overflow-y-hidden">
      <div className="flex justify-center items-center gap-4 min-w-max px-4 py-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className="py-2 px-2 pb-8 w-fit flex flex-col items-center justify-center rounded-[40px] 
               text-gray-800 dark:text-white cursor-pointer shadow-lg bg-white dark:bg-gray-700 
               hover:shadow-xl dark:hover:text-white transition-colors duration-300 flex-shrink-0"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-500"
            >
              <div className="flex items-center justify-center">
                {category.icon}
              </div>
            </motion.div>

            <p className="text-center mt-4 font-vazir transition-colors duration-300 dark:text-gray-100">
              {category.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;