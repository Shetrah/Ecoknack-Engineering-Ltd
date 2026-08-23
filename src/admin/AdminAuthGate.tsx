import React, { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Lock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { auth, isFirebaseConfigured } from '../lib/firebase';

type AdminAuthGateProps = {
  children: React.ReactNode;
};

const AdminAuthGate: React.FC<AdminAuthGateProps> = ({ children }) => {
  const [user, setUser] = useState(auth?.currentUser ?? null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!auth) {
      toast.error('Firebase Auth is not configured.');
      return;
    }

    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Admin access granted');
    } catch (error) {
      const message = error instanceof FirebaseError ? error.message : 'Invalid admin credentials.';
      toast.error(message);
      console.error('Admin login failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isFirebaseConfigured || !auth) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-md bg-white rounded-2xl shadow p-8 text-center">
          <h1 className="text-xl font-bold text-primary mb-3">Firebase admin access is not ready</h1>
          <p className="text-sm text-gray-500">Make sure your Firebase web config and Firebase Auth settings are enabled in the Vercel environment.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="flex items-center gap-3 text-primary">
          <Loader2 className="animate-spin" size={24} />
          <span className="font-medium">Checking admin access…</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Lock size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Admin Access</h1>
          <p className="text-sm text-gray-500 mb-6">Sign in with a Firebase Auth email and password that has access to the project database.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder="admin@example.com" />
            <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder="Password" />
            <button type="submit" disabled={submitting} className="w-full bg-primary text-white py-2 rounded-lg font-semibold disabled:opacity-60">
              {submitting ? 'Signing in…' : 'Enter Admin Portal'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminAuthGate;
