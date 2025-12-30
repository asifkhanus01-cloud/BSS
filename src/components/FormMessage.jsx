import React from 'react';

/**
 * FormMessage Component
 * Displays success or error messages for forms
 */
export function FormMessage({ type, message, onClose }) {
    if (!message) return null;

    const baseClasses = "p-4 rounded-md mb-4 flex items-center justify-between";
    const typeClasses = {
        success: "bg-green-50 text-green-800 border border-green-200",
        error: "bg-red-50 text-red-800 border border-red-200",
        info: "bg-blue-50 text-blue-800 border border-blue-200"
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type] || typeClasses.info}`}>
            <p className="font-medium">{message}</p>
            {onClose && (
                <button
                    onClick={onClose}
                    className="ml-4 text-current hover:opacity-70"
                    aria-label="Close message"
                >
                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}

