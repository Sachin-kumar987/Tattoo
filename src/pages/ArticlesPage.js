import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { articlesData } from '../data';
import { IoMdArrowForward } from 'react-icons/io';

const ArticlesPage = () => {
  const { title, subtitle, articles } = articlesData;

  return (
    <div className="min-h-screen bg-dark">
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn('down')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="text-center max-w-[600px] mx-auto"
          >
            <h1 className="text-[40px] lg:text-[60px] font-semibold text-white mb-4">
              {title}
            </h1>
            <p className="text-gray-300 text-lg">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={fadeIn('up')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-accent hover:text-white transition-colors group">
                    <span className="font-medium">Read More</span>
                    <IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
