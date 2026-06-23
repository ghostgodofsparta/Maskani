'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home, Users, Mail, Phone, Apple, Eye, EyeOff } from 'lucide-react';

type SignUpStep = 'role-select' | 'auth-method' | 'phone-otp' | 'details';
type UserRole = 'tenant' | 'landlord' | null;
type AuthMethod = 'google' | 'phone' | null;

export default function SignUpPage() {
  const [step, setStep] = useState<SignUpStep>('role-select');
  const [role, setRole] = useState<UserRole>(null);
  const [authMethod, setAuthMethod] = useState<AuthMethod>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 1: Role Selection
  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep('auth-method');
  };

  // Step 2: Auth Method Selection
  const handleAuthMethodSelect = (method: AuthMethod) => {
    setAuthMethod(method);
    if (method === 'google') {
      // Handle Google Sign-Up (integrate with Firebase/NextAuth)
      handleGoogleSignUp();
    } else if (method === 'phone') {
      setStep('phone-otp');
    }
  };

  // Google Sign-Up Handler
  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      // TODO: Integrate with Google OAuth (NextAuth.js or Firebase)
      console.log(`Signing up ${role} with Google`);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Redirect to dashboard after successful signup
        window.location.href = role === 'tenant' ? '/dashboard/tenant' : '/dashboard/landlord';
      }, 1500);
    } catch (error) {
      console.error('Google signup error:', error);
      setLoading(false);
    }
  };

  // Send OTP Handler
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setLoading(true);
    try {
      // TODO: Integrate with SMS provider (Twilio, Africa's Talking)
      console.log(`Sending OTP to ${phoneNumber}`);
      // Simulate API call
      setTimeout(() => {
        setShowOtpInput(true);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('OTP send error:', error);
      setLoading(false);
    }
  };

  // Verify OTP Handler
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) return;

    setLoading(true);
    try {
      // TODO: Verify OTP with backend
      console.log(`Verifying OTP: ${otp}`);
      // Simulate API call
      setTimeout(() => {
        setStep('details');
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('OTP verification error:', error);
      setLoading(false);
    }
  };

  // Complete Sign-Up Handler
  const handleCompleteSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) return;

    setLoading(true);
    try {
      // TODO: Create user in database (Firebase, PostgreSQL, etc.)
      const signupData = {
        role,
        phoneNumber: authMethod === 'phone' ? phoneNumber : undefined,
        email,
        fullName,
        password,
      };

      console.log('Completing signup:', signupData);

      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Redirect to dashboard after successful signup
        window.location.href = role === 'tenant' ? '/dashboard/tenant' : '/dashboard/landlord';
      }, 1500);
    } catch (error) {
      console.error('Signup completion error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Back Button & Logo */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          {step !== 'role-select' && (
            <button
              onClick={() => {
                if (step === 'auth-method') setStep('role-select');
                else if (step === 'phone-otp') setStep('auth-method');
                else if (step === 'details') setStep('phone-otp');
              }}
              className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
            >
              ← Back
            </button>
          )}
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-teal-600">Maskani</h1>
          </div>
          <div className="w-12"></div>
        </div>
      </div>

      <div className="pt-20 pb-8 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {/* STEP 1: Role Selection */}
          {step === 'role-select' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's get started</h2>
                <p className="text-gray-600">Are you looking for a property or listing one?</p>
              </div>

              {/* Tenant Option */}
              <button
                onClick={() => handleRoleSelect('tenant')}
                className="w-full bg-white border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50 rounded-2xl p-6 text-left transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Users className="text-teal-600 group-hover:scale-110 transition" size={32} />
                  <ChevronRight className="text-gray-400 group-hover:text-teal-600 transition" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">I'm a Tenant</h3>
                <p className="text-gray-600 text-sm">Looking for a place to live</p>
              </button>

              {/* Landlord Option */}
              <button
                onClick={() => handleRoleSelect('landlord')}
                className="w-full bg-white border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50 rounded-2xl p-6 text-left transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Home className="text-orange-500 group-hover:scale-110 transition" size={32} />
                  <ChevronRight className="text-gray-400 group-hover:text-orange-500 transition" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">I'm a Landlord</h3>
                <p className="text-gray-600 text-sm">Listing properties or managing</p>
              </button>

              {/* Sign In Link */}
              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-teal-600 hover:text-teal-700 font-semibold">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Auth Method Selection */}
          {step === 'auth-method' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {role === 'tenant' ? "Tenant Sign Up" : "Landlord Sign Up"}
                </h2>
                <p className="text-gray-600">Choose how you'd like to sign up</p>
              </div>

              {/* Google Sign-Up */}
              <button
                onClick={() => handleAuthMethodSelect('google')}
                disabled={loading}
                className="w-full bg-white border border-gray-300 hover:border-teal-500 hover:bg-teal-50 rounded-xl py-3 px-4 font-semibold text-gray-900 transition flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {loading ? 'Signing up...' : 'Continue with Google'}
              </button>

              {/* Phone Sign-Up */}
              <button
                onClick={() => handleAuthMethodSelect('phone')}
                disabled={loading}
                className="w-full bg-white border border-gray-300 hover:border-orange-500 hover:bg-orange-50 rounded-xl py-3 px-4 font-semibold text-gray-900 transition flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <Phone size={20} className="text-orange-500" />
                {loading ? 'Processing...' : 'Sign up with Phone Number'}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Email Sign-Up Link */}
              <button
                onClick={() => {
                  setAuthMethod('phone');
                  setStep('phone-otp');
                }}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3 px-4 font-semibold transition flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Sign up with Email
              </button>
            </div>
          )}

          {/* STEP 3: Phone OTP */}
          {step === 'phone-otp' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter your phone</h2>
                <p className="text-gray-600">We'll send you a verification code</p>
              </div>

              {!showOtpInput ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="254 7XX XXX XXX"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Include country code (e.g., +254)</p>
                  </div>

                  <button
                    type="submit"
                    disabled={!phoneNumber || loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending code...' : 'Send Verification Code'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Verification Code</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-center text-2xl tracking-widest font-mono"
                    />
                    <p className="text-xs text-gray-500 mt-2">Check your SMS for the 6-digit code</p>
                  </div>

                  <button
                    type="submit"
                    disabled={otp.length !== 6 || loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Verifying...' : 'Verify Code'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowOtpInput(false)}
                    className="w-full text-teal-600 hover:text-teal-700 font-medium py-2"
                  >
                    Didn't receive code? Send again
                  </button>
                </form>
              )}
            </div>
          )}

          {/* STEP 4: Complete Profile */}
          {step === 'details' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Almost done!</h2>
                <p className="text-gray-600">Complete your profile</p>
              </div>

              <form onSubmit={handleCompleteSignUp} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-teal-600"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!fullName || !email || !password || loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-teal-600 hover:text-teal-700 font-semibold">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
