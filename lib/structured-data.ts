import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://www.linkedin.com/in/akshay-rajput-6559b4342/',
    },
    publisher: {
      '@type': 'Person',
      name: 'Akshay Rajput',
      url: 'https://akshayrajput.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Akshay Rajput - Web Designer',
    description: "I design modern, fast, and conversion-focused websites for local businesses. Turn visitors into customers with clean UI and mobile-optimized design.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Akshay Rajput',
      url: 'https://www.linkedin.com/in/akshay-rajput-6559b4342/',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akshay Rajput',
    url: 'https://akshayrajput.com',
    sameAs: [
      'https://www.linkedin.com/in/akshay-rajput-6559b4342/',
    ],
    jobTitle: 'Web Designer',
    description: 'Web Designer for Local Businesses | I Build High-Converting Websites That Bring Customers',
    knowsAbout: [
      'Web Design',
      'Landing Page Design',
      'Business Websites',
      'Conversion Optimization',
      'UI/UX Design',
    ],
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
