"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Building, Key, Heart, Plane, MapPin, Calendar, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface CategoryItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

function Category() {
  const { t } = useTranslation();
  
  // تعریف دسته‌بندی‌ها با آیکون‌های مناسب
  const categories: CategoryItem[] = [
    { 
      id: 1, 
      name: t('categories.visa'), 
      icon: <FileText className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.visaDesc')
    },
    { 
      id: 2, 
      name: t('categories.hotel'), 
      icon: <Building className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.hotelDesc')
    },
    { 
      id: 3, 
      name: t('categories.housing'), 
      icon: <Key className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.housingDesc')
    },
    { 
      id: 4, 
      name: t('categories.marriage'), 
      icon: <Heart className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.marriageDesc')
    },
    { 
      id: 5, 
      name: t('categories.ceremonies'), 
      icon: <Calendar className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.ceremoniesDesc')
    },
    { 
      id: 6, 
      name: t('categories.tours'), 
      icon: <MapPin className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.toursDesc')
    },
    { 
      id: 7, 
      name: t('categories.immigration'), 
      icon: <Plane className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.immigrationDesc')
    },
    { 
      id: 8, 
      name: t('categories.services'), 
      icon: <Users className="!w-12 !h-12 text-primary dark:text-primary stroke-[1]" />,
      description: t('categories.servicesDesc')
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
              className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-500"
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