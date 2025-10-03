import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'JCB Services Blog | Construction Equipment Tips & Guides',
  description: 'Expert insights on JCB services, construction equipment, excavation tips, and industry best practices in Prayagraj and Uttar Pradesh.',
  keywords: [
    'JCB services blog',
    'construction equipment tips',
    'excavation guide',
    'road construction tips',
    'demolition safety',
    'earthmoving techniques',
    'JCB maintenance',
    'construction industry Prayagraj',
    'equipment rental guide',
    'construction best practices'
  ].join(', '),
  openGraph: {
    title: 'JCB Services Blog | Construction Equipment Tips & Guides',
    description: 'Expert insights on JCB services, construction equipment, and industry best practices.',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'jcb-excavation-guide-prayagraj',
    title: 'Complete Guide to JCB Excavation Services in Prayagraj',
    excerpt: 'Everything you need to know about professional excavation services, equipment types, and choosing the right JCB for your project in Prayagraj.',
    image: '/jcb-real-1.jpg',
    date: '2024-01-15',
    category: 'Excavation',
    readTime: '8 min read',
    keywords: ['JCB excavation Prayagraj', 'excavation services', 'foundation digging', 'site preparation']
  },
  {
    slug: 'road-construction-uttar-pradesh',
    title: 'Road Construction Best Practices in Uttar Pradesh',
    excerpt: 'Learn about modern road construction techniques, equipment requirements, and quality standards for building durable roads in UP.',
    image: '/jcb-real-2.jpg',
    date: '2024-01-12',
    category: 'Road Construction',
    readTime: '10 min read',
    keywords: ['road construction UP', 'highway construction', 'road building techniques', 'infrastructure development']
  },
  {
    slug: 'demolition-services-safety-guide',
    title: 'Safe Demolition Practices: A Comprehensive Safety Guide',
    excerpt: 'Essential safety protocols, equipment requirements, and best practices for safe and efficient demolition projects.',
    image: '/jcb-real-3.jpg',
    date: '2024-01-10',
    category: 'Demolition',
    readTime: '6 min read',
    keywords: ['demolition safety', 'building demolition', 'safe demolition practices', 'demolition equipment']
  },
  {
    slug: 'earthmoving-equipment-rental-tips',
    title: 'Earthmoving Equipment Rental: Tips for Success',
    excerpt: 'How to choose the right earthmoving equipment for your project, rental considerations, and cost optimization strategies.',
    image: '/jcb-real-4.jpg',
    date: '2024-01-08',
    category: 'Equipment Rental',
    readTime: '7 min read',
    keywords: ['earthmoving equipment rental', 'JCB rental tips', 'equipment selection', 'cost optimization']
  },
  {
    slug: 'construction-equipment-maintenance',
    title: 'Construction Equipment Maintenance: Maximizing Efficiency',
    excerpt: 'Essential maintenance practices for construction equipment to ensure optimal performance, longevity, and cost-effectiveness.',
    image: '/jcb-real-5.jpg',
    date: '2024-01-05',
    category: 'Maintenance',
    readTime: '9 min read',
    keywords: ['equipment maintenance', 'JCB maintenance', 'construction equipment care', 'preventive maintenance']
  },
  {
    slug: 'choosing-right-jcb-project',
    title: 'How to Choose the Right JCB for Your Construction Project',
    excerpt: 'Comprehensive guide to selecting the appropriate JCB model based on project requirements, site conditions, and budget considerations.',
    image: '/jcb-real-6.jpg',
    date: '2024-01-03',
    category: 'Equipment Selection',
    readTime: '8 min read',
    keywords: ['JCB selection guide', 'construction equipment choice', 'project planning', 'equipment specifications']
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData type="article" data={{
        title: "JCB Services Blog",
        description: "Expert insights on JCB services and construction equipment",
        url: "https://jcbbooking.com/blog"
      }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              JCB Services <span className="text-yellow-300">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Expert insights, tips, and guides for construction equipment and JCB services
            </p>
            <p className="text-lg text-gray-200">
              Stay updated with the latest trends, best practices, and industry knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Article
          </h2>
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Excavation', 'Road Construction', 'Demolition', 'Equipment Rental', 'Maintenance', 'Equipment Selection'].map((category) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-gray-600 mb-4">
                  Expert articles and guides about {category.toLowerCase()}
                </p>
                <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                  View Articles →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Professional JCB Services?
          </h2>
          <p className="text-xl mb-8">
            Get expert advice and professional services for your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9559394527" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call: 95593 94527
            </a>
            <a 
              href="https://wa.me/919559394527?text=Hi, I need JCB services information"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}