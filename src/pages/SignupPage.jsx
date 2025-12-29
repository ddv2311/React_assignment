import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, and number';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { strength: 0, label: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    const colors = ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-green-600'];
    
    return { strength, label: labels[strength], color: colors[strength] };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen flex">
      {/* LEFT: IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 items-center justify-center p-12">
        <div className="max-w-lg">
          <Link to="/">
            <h1 className="text-4xl font-extrabold mb-6">SHOP.CO</h1>
          </Link>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Join our community of fashion enthusiasts. Get exclusive access to new arrivals, special offers, and personalized recommendations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="Fashion 1"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="Fashion 2"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Fashion 3"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Fashion 4"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* RIGHT: FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden block mb-8">
            <h1 className="text-3xl font-extrabold text-center">SHOP.CO</h1>
          </Link>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-500 mb-8">Join SHOP.CO and start shopping today</p>

          {/* Social Signup */}
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
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className={`flex items-center border rounded-full px-4 py-3 ${errors.name ? 'border-red-500' : 'focus-within:border-black'}`}>
                <FiUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full outline-none text-sm"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

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
                  placeholder="Create a password"
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
              
              {/* Password Strength */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded ${
                          i <= passwordStrength.strength ? passwordStrength.color : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{passwordStrength.label}</p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className={`flex items-center border rounded-full px-4 py-3 ${errors.confirmPassword ? 'border-red-500' : 'focus-within:border-black'}`}>
                <FiLock className="text-gray-400 mr-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full outline-none text-sm"
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 accent-black mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-black font-medium hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-black font-medium hover:underline">Privacy Policy</a>
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
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
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-8 text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-black hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

