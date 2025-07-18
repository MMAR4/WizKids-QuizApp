import React, { useState } from 'react';
import { auth, db } from '../firebase'; // adjust path as needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SignUp = ({ onSignup, onSwitch }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill all fields');
      setLoading(false);
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        firstName,
        lastName,
        email,
        createdAt: serverTimestamp()
      });

      setLoading(false);
      onSignup(); // notify parent after successful signup

    } catch (err) {
      setError(err.message || 'Failed to sign up');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for WIZKIDS</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
      <p>
        Already have an account?{' '}
        <button onClick={onSwitch} type="button">Login</button>
      </p>
    </div>
  );
};

export default SignUp;
