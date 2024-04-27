import React, { useState, useEffect } from "react";

export default function CustomIcon({ iconName }) {
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: icon } = await import(
          `../../../../assets/icons/${iconName}.png`
        );
        setIconSrc(icon);
      } catch (error) {
        console.error(`Failed to import icon: ${iconName}`, error);
      }
    };

    if (iconName) {
      importIcon();
    }
  }, [iconName]);

  if (!iconSrc) {
    return <div>Loading icon...</div>;
  }

  return <img src={iconSrc} alt={iconName} style={{ height: "50px" }} />;
}
