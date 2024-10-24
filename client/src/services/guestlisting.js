
const API_BASE_URL = 'https://villa-bnb-server.onrender.com'; // Flask API base URL
// src/services/guestlisting.js
export async function getFavorites(email) {
    const response = await fetch(`${API_BASE_URL}/favorites?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch favorites');
    }
  
    return await response.json();
  }
  
  export async function getBookings(email) {
    const response = await fetch(`${API_BASE_URL}/bookings?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
  
    return await response.json();
  }
  