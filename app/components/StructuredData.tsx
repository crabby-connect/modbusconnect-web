export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Modbus Connect",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 7, Windows 8, Windows 10, Windows 11",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Professional Modbus TCP/IP scanner and real-time monitoring software for industrial automation. Free device discovery, data visualization, and protocol logging for SCADA, PLC, and Modbus devices.",
    softwareVersion: "0.2.0-beta",
    author: {
      "@type": "Person",
      name: "Crabby",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    downloadUrl: "https://modbusconnect.com/download",
    screenshot: "https://modbusconnect.com/screenshots/main-dashboard.png",
    featureList: [
      "Smart Device Discovery",
      "Real-Time Monitoring",
      "Data Visualization",
      "Workspace Management",
      "Protocol Logging",
      "High Performance",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Modbus Connect",
    url: "https://modbusconnect.com",
    description:
      "Professional Modbus TCP/IP scanner and monitoring tool for industrial automation",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://modbusconnect.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://modbusconnect.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://modbusconnect.com/#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Download",
        item: "https://modbusconnect.com/download",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
