import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const FirebaseAuth = getAuth()

export const Authentication = () => {
  return FirebaseAuth
}

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async () => {
  await signOut(FirebaseAuth)
}

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Email tidak terdaftar'
    case 'auth/wrong-password':
    default:
      return 'Email atau password salah'
  }
}

export const GetSignUpErrorMessage = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Email telah terdaftar.'
    default:
      return 'Terjadi kesalahan saat proses sign up.'
  }
}
