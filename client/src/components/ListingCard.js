import React, { useState } from 'react';

const ListingCard = ({ listing, onFavorite, onBook }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);  
  const [isBooking, setIsBooking] = useState(false);  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const openBookingModal = () => {
    setIsBooking(true);
    setOpenModal(true);
  };

  const openFavoriteModal = () => {
    setIsBooking(false);
    setOpenModal(true);
  };

  const handleFavorite = async () => {
    if (!email) {
      setSnackbarMessage('Please enter your email to favorite this listing.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      await onFavorite(listing.id, email);
      setIsFavorite(true);
      setSnackbarMessage('Added to favorites!');
      setOpenModal(false);
    } catch (error) {
      console.error('Failed to add favorite:', error);
      setSnackbarMessage('Failed to add to favorites. Try again.');
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleBooking = async () => {
    if (!startDate || !endDate || !email) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      await onBook(listing.id, startDate, endDate, email);
      setSnackbarMessage('Booking confirmed!');
      setOpenModal(false);
    } catch (error) {
      console.error('Failed to create booking:', error);
      setSnackbarMessage(error.message || 'Error in booking. Please try again.');
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleSubmit = () => {
    if (isBooking) {
      handleBooking();
    } else {
      handleFavorite();
    }
  };

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] max-w-sm">
        {/* Image Container */}
        <div className="relative overflow-hidden h-56 bg-gray-200">
          <img
            src={listing.image_url}
            alt={listing.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* Favorite Button */}
          <button
            onClick={openFavoriteModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
          >
            {isFavorite ? (
              <svg className="w-6 h-6 text-[#FF385C]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
            {listing.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {listing.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FF385C] text-sm">★</span>
              ))}
            </div>
            <span className="text-sm text-gray-500">(4.9)</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-xl font-semibold text-gray-900">
              ${listing.price_per_night}
            </span>
            <span className="text-sm text-gray-600"> per night</span>
          </div>

          {/* Book Button */}
          <button
            onClick={openBookingModal}
            className="w-full bg-[#FF385C] text-white font-semibold py-3 rounded-lg hover:bg-[#E6005F] transition-colors shadow-sm"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {isBooking ? 'Complete Your Booking' : 'Save This Villa'}
            </h2>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>

            {/* Date Inputs (for booking only) */}
            {isBooking && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
                  />
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 border border-gray-300 text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-[#FF385C] text-white font-semibold py-2 rounded-lg hover:bg-[#E6005F] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : isBooking ? 'Confirm Booking' : 'Save Villa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Snackbar */}
      {openSnackbar && (
        <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between z-50">
          <span className="text-sm">{snackbarMessage}</span>
          <button
            onClick={() => setOpenSnackbar(false)}
            className="ml-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ListingCard;