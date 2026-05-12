"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-play when opened, properly handling the promise
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Ignore AbortError as it simply means the user closed the modal before the video started
            if (error.name !== "AbortError") {
              console.error("Error playing video:", error);
            }
          });
        }
      }
    } else {
      document.body.style.overflow = "unset";
      // We don't need to manually call pause() here because when isOpen is false, 
      // the component returns null, removing the <video> from the DOM which stops it automatically.
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '800px', backgroundColor: '#000', padding: 0, border: 'none', position: 'relative' }}
      >
        <button 
          onClick={onClose} 
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: 'white',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <video
          ref={videoRef}
          controls
          playsInline
          className="video-showcase-player"
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>,
    document.body
  );
}
