export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Modbus Connect",
    alternateName: "Free Modbus TCP Client",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Industrial Automation Software",
    operatingSystem: "Windows 7, Windows 8, Windows 10, Windows 11",
    processorRequirements: "64-bit processor",
    softwareRequirements: "Windows 64-bit",
    fileSize: "15MB",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
    },
    description:
      "Download the free Modbus Connect tool. A professional Modbus TCP Client, Scanner, and Logger in one intuitive interface. Visualize data and diagnose problems instantly for SCADA, PLC, and Modbus devices.",
    softwareVersion: "0.4.0-beta",
    datePublished: "2024-01-01",
    dateModified: "2025-11-01",
    author: {
      "@type": "Person",
      name: "Crabby",
      email: "crabby@modbusconnect.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Modbus Connect",
      url: "https://modbusconnect.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1",
    },
    downloadUrl: "https://modbusconnect.com/download",
    installUrl: "https://modbusconnect.com/download",
    screenshot: [
      {
        "@type": "ImageObject",
        url: "https://modbusconnect.com/screenshots/main-dashboard.png",
        caption: "Modbus Connect Main Dashboard",
      },
    ],
    featureList: [
      "Modbus TCP Client",
      "Modbus TCP Scanner",
      "Modbus Logger",
      "Smart Device Discovery",
      "Real-Time Monitoring",
      "Data Visualization",
      "Workspace Management",
      "Protocol Logging",
      "High Performance Rust Backend",
    ],
    keywords:
      "Modbus TCP Client, Modbus Scanner, Modbus Logger, free Modbus tool, industrial automation",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Modbus Connect",
    url: "https://modbusconnect.com",
    description:
      "Free Modbus TCP Client, Scanner & Logger for industrial automation",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
