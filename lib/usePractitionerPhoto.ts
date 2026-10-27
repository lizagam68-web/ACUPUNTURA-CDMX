"use client";

import { useState, useEffect } from "react";

export const DEFAULT_PRACTITIONER_PHOTO = "/images/lic-elizabeth-gamino-real.jpg";

export function usePractitionerPhoto() {
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_PRACTITIONER_PHOTO);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("practitioner_custom_photo");
      if (saved) {
        setPhotoSrc(saved);
      }
    } catch {
      // localStorage unavailable in some contexts
    }

    const handleUpdate = () => {
      try {
        const updated = localStorage.getItem("practitioner_custom_photo");
        if (updated) {
          setPhotoSrc(updated);
        } else {
          setPhotoSrc(`${DEFAULT_PRACTITIONER_PHOTO}?v=${Date.now()}`);
        }
      } catch {
        setPhotoSrc(`${DEFAULT_PRACTITIONER_PHOTO}?v=${Date.now()}`);
      }
    };

    window.addEventListener("practitioner-photo-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("practitioner-photo-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return photoSrc;
}
