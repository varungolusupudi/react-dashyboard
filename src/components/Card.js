import React from 'react';
import { useState, useEffect } from 'react';

const Card = () => {
    return (
        <div className="border-solid border-2 border-blue-900 text-left w-full max-w-md mx-auto p-6">
            <div className="rounded-lg border-solid border-2 border-black p-6 text-left">
                <h1 className="my-4 text-3xl font-bold">Name</h1>{/* Name */}
                <h2 className="my-4 text-xl font-bold">Username</h2> {/* Username */}
                <h2 className="my-4 text-xl font-bold">Email</h2> {/* Email */}
                <h2 className="my-4 text-xl font-bold">Address</h2> {/* Address */}
                <h2 className="my-4 text-xl font-bold">Phone</h2> {/* Phone */}
                <h2 className="my-4 text-xl font-bold">Website</h2> {/* Website */}
                <h2 className="my-4 text-xl font-bold">Company</h2> {/* Company */}
            </div>
        </div>
    );
}

export default Card;