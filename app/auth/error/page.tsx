"use client";

import Link from "next/link";

export default function AuthErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Authentication Error</h2>
                <p className="mt-2 text-gray-600">Something went wrong with your authentication.</p>
                <Link
                    href="/login"
                    className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Return to Login
                </Link>
            </div>
        </div>
    );
}