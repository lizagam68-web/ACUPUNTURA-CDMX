import React from 'react';

interface JsonLdProps {
  schema?: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
