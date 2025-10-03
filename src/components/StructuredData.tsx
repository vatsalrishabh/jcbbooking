'use client';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'article';
  data?: any;
  location?: string;
  service?: string;
}

export default function StructuredData({ 
  type = 'localBusiness', 
  data = {},
  location,
  service 
}: StructuredDataProps) {
  
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JCB Booking Services",
    "alternateName": "JCB Rental Prayagraj",
    "url": "https://jcbbooking.com",
    "logo": "https://jcbbooking.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95593-94527",
      "contactType": "customer service",
      "areaServed": ["Prayagraj", "Uttar Pradesh", "India"],
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Civil Lines",
      "addressLocality": "Prayagraj",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "211001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4358,
      "longitude": 81.8463
    },
    "sameAs": [
      "https://www.facebook.com/jcbbookingservices",
      "https://www.instagram.com/jcbbookingservices",
      "https://wa.me/919559394527"
    ]
  });

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jcbbooking.com",
    "name": "JCB Booking Services",
    "image": "https://jcbbooking.com/logo.png",
    "description": "Professional JCB rental and construction equipment services in Prayagraj and Uttar Pradesh. Expert excavation, road construction, demolition, and earthmoving services.",
    "url": "https://jcbbooking.com",
    "telephone": "+91-95593-94527",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Civil Lines",
      "addressLocality": location || "Prayagraj",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "211001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4358,
      "longitude": 81.8463
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "20:00"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.4358,
        "longitude": 81.8463
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "JCB Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "JCB Excavation Services",
            "description": "Professional excavation services using modern JCB excavators"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Road Construction Services",
            "description": "Expert road construction and repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Demolition Services",
            "description": "Safe and efficient demolition services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Earthmoving Services", 
            "description": "Comprehensive earthmoving and landscaping services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Rental",
            "description": "JCB equipment rental with professional operators"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent JCB services in Prayagraj. Professional team and modern equipment. Highly recommended for construction work."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best JCB rental service in Uttar Pradesh. Quick response and competitive pricing. Great for excavation work."
      }
    ]
  });

  const getServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service ? `${service} in ${location || 'Prayagraj'}` : "JCB Services",
    "description": `Professional ${service?.toLowerCase() || 'JCB'} services in ${location || 'Prayagraj'}, Uttar Pradesh`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "JCB Booking Services",
      "telephone": "+91-95593-94527",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location || "Prayagraj",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": location || "Prayagraj, Uttar Pradesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service || "JCB Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "800-1200",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "800-1200",
            "priceCurrency": "INR",
            "unitText": "per hour"
          }
        }
      ]
    }
  });

  const getArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title || "JCB Services Guide",
    "description": data.description || "Comprehensive guide to JCB services",
    "author": {
      "@type": "Organization",
      "name": "JCB Booking Services"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "JCB Booking Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jcbbooking.com/logo.png"
      }
    },
    "datePublished": data.datePublished || new Date().toISOString(),
    "dateModified": data.dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url || "https://jcbbooking.com"
    }
  });

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'service':
        return getServiceSchema();
      case 'article':
        return getArticleSchema();
      default:
        return getLocalBusinessSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  );
}