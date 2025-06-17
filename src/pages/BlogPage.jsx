import React from "react";
import { motion } from "framer-motion";
import { Feather, CalendarDays, UserCircle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Kapadokya'da Balon Turu: Unutulmaz Bir Deneyim İçin İpuçları",
      date: "2025-05-01",
      author: "Ayşe Gezgin",
      category: "Seyahat Rehberi",
      summary: "Kapadokya'nın büyülü atmosferinde sıcak hava balonuyla gökyüzüne yükselmek, hayatınız boyunca unutamayacağınız anılardan biri olacak. Bu rehberde, balon turu öncesi ve sırasında dikkat etmeniz gerekenleri bulabilirsiniz.",
      image: "https://images.unsplash.com/photo-1599463966301-f82cd13c735c",
      tags: ["Kapadokya", "Balon Turu", "Türkiye", "Macera"]
    },
    {
      id: "2",
      title: "Ege'nin Saklı Cennetleri: Az Bilinen 5 Muhteşem Koy",
      date: "2025-04-22",
      author: "Deniz Kaşif",
      category: "Gezi Önerileri",
      summary: "Kalabalıktan uzak, huzurlu bir tatil arayanlar için Ege'nin saklı kalmış koylarını keşfe çıkıyoruz. Turkuaz suları ve el değmemiş doğasıyla bu koylar sizi büyüleyecek.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      tags: ["Ege", "Koylar", "Deniz Tatili", "Doğa"]
    },
    {
      id: "3",
      title: "İstanbul'da Hafta Sonu Kaçamağı: Tarih ve Lezzet Dolu Bir Rota",
      date: "2025-04-10",
      author: "Mehmet Gurme",
      category: "Şehir Turları",
      summary: "İstanbul'un tarihi dokusunu ve eşsiz lezzetlerini bir arada deneyimleyebileceğiniz, dolu dolu bir hafta sonu kaçamağı için size özel bir rota hazırladık.",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa",
      tags: ["İstanbul", "Hafta Sonu", "Kültür Turu", "Yeme İçme"]
    },
  ];

  const categories = ["Tümü", "Seyahat Rehberi", "Gezi Önerileri", "Şehir Turları", "Tatil İpuçları"];
  const popularTags = ["Kapadokya", "Ege", "İstanbul", "Antalya", "Doğa", "Macera", "Kültür"];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Feather className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Tatilsana Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Seyahat ilhamı, gezi rehberleri, tatil ipuçları ve daha fazlası. Dünyayı keşfetmek için ihtiyacınız olan her şey burada!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Blog Posts */}
        <main className="lg:w-2/3 space-y-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Link to={`/blog/${post.id}`}>
                <img  
                  alt={post.title} 
                  className="w-full h-64 object-cover"
                 src="https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7" />
              </Link>
              <div className="p-6 md:p-8">
                <div className="mb-3 text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> {post.author}</span>
                  <span className="flex items-center"><Tag className="h-4 w-4 mr-1.5" /> {post.category}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors mb-3">{post.title}</h2>
                </Link>
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <Button asChild>
                  <Link to={`/blog/${post.id}`}>Devamını Oku</Link>
                </Button>
              </div>
            </motion.article>
          ))}
          {/* Pagination (Placeholder) */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="mr-2">Önceki</Button>
            <Button variant="outline">Sonraki</Button>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8 sticky top-24 self-start">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Arama Yap</h3>
            <Input placeholder="Blogda ara..." />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">{category}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Popüler Etiketler</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">{tag}</Badge>
              ))}
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;