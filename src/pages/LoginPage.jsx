import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, just redirect to home
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT: IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 items-center justify-center p-12">
        <div className="max-w-lg">
          <Link to="/">
            <h1 className="text-4xl font-extrabold mb-6">SHOP.CO</h1>
          </Link>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Discover the latest trends in fashion. Join thousands of satisfied customers who trust SHOP.CO for their style needs.
          </p>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Fashion"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* RIGHT: FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden block mb-8">
            <h1 className="text-3xl font-extrabold text-center">SHOP.CO</h1>
          </Link>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">Please enter your details to sign in</p>

          {/* Social Login */}
          <div className="flex gap-3 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 border rounded-full py-3 hover:bg-gray-50 transition-colors">
              <FaGoogle />
              <span className="text-sm font-medium hidden sm:inline">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border rounded-full py-3 hover:bg-gray-50 transition-colors">
              <FaFacebook />
              <span className="text-sm font-medium hidden sm:inline">Facebook</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border rounded-full py-3 hover:bg-gray-50 transition-colors">
              <FaApple />
              <span className="text-sm font-medium hidden sm:inline">Apple</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <hr className="flex-1" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className={`flex items-center border rounded-full px-4 py-3 ${errors.email ? 'border-red-500' : 'focus-within:border-black'}`}>
                <FiMail className="text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full outline-none text-sm"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className={`flex items-center border rounded-full px-4 py-3 ${errors.password ? 'border-red-500' : 'focus-within:border-black'}`}>
                <FiLock className="text-gray-400 mr-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 accent-black"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-black hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

